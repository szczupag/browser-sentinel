import { UGCConfig, PhishingAnalysis } from './types';
import { highlightUGCThreats } from '../../utils/highlightUGC';
import { showUGCThreatIcon, setupUGCAlertListener, UGC_ANALYSIS_PROMPT } from '../../content-phishing-analysis';

export abstract class UGCAnalyzer {
  private config: UGCConfig;
  //private observer: MutationObserver;
  private isInitialized = false;

  constructor(config: UGCConfig) {
    this.config = {
      debounceTime: 1000,
      initialScanDelay: 2345,
      ...config
    };
  }

  protected isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth &&
      rect.width > 0 &&
      rect.height > 0
    );
  }

  protected debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      clearTimeout(timeout);
      // @ts-ignore
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  protected shouldAnalyzeContent(element: Element): boolean {
    const content = (element.textContent || '').trim();
    return content.length >= this.config.minLength;
  }

  protected async analyzeContent(element: HTMLElement) {
    try {
      const content = (element.textContent || '').trim();
      console.log(`Analyzing ${this.config.platform} content:`, content);
      
      const session = await window.ai.languageModel.create({
        topK: 1,
        temperature: 0.1,
        systemPrompt: this.config.preAnalysisPrompt + UGC_ANALYSIS_PROMPT,
      });
      
      const promptResult = await session.prompt(content);
      const analysis = JSON.parse(promptResult) as PhishingAnalysis;
      console.log('analysis', analysis);

      if (!analysis.isSafe) {
        console.log(`🚨 Suspicious ${this.config.platform} content detected:`, {
          text: content,
          analysis: analysis
        });
        highlightUGCThreats(element, analysis.overallRiskScore);
        showUGCThreatIcon(element, analysis.overallRiskScore, analysis);
      }
    } catch (error) {
      console.error(`Failed to analyze ${this.config.platform} content:`, error);
    }
  }

  protected async scanVisibleContent() {
    try {
      const elements: HTMLElement[] = Array.from(document.querySelectorAll(
        `${this.config.selectors.content}:not([data-analyzed])`
      ));
      
      for (const element of elements) {
        if (!this.isInViewport(element)) continue;
        element.setAttribute('data-analyzed', 'true');
        if (this.shouldAnalyzeContent(element)) {
          await this.analyzeContent(element);
        }
      }
    } catch (error) {
      console.error(`Error scanning ${this.config.platform} content:`, error);
    }
  }

  protected setupScrollListener() {
    const handleScroll = this.debounce(() => {
      this.scanVisibleContent();
    }, this.config.debounceTime!);

    window.addEventListener('scroll', handleScroll);
  }

  /*
  protected setupMutationObserver() {
    this.observer = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldScan = true;
          break;
        }
      }
      if (shouldScan) this.scanVisibleContent();
    });

    const contentRoot = document.querySelector(this.config.selectors.contentRoot);
    if (contentRoot) {
      this.observer.observe(contentRoot, {
        childList: true,
        subtree: true
      });
    }
  }
  */

  public initialize() {
    if (this.isInitialized) return;
    
    console.log(`Initializing ${this.config.platform} UGC analyzer`);
    setupUGCAlertListener();
    
    this.setupScrollListener();
    //this.setupMutationObserver();

    setTimeout(() => {
      this.scanVisibleContent();
    }, this.config.initialScanDelay);

    this.isInitialized = true;
  }

  public cleanup() {
    //this.observer?.disconnect();
  }
}