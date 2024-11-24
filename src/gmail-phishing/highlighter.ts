import type { ScanResult, ThreatLevel } from './types';
import { translate } from '../utils/translate';

const getThreatColor = (level: ThreatLevel): string => {
  const colors = {
    HIGH: '#dc2626',
    MEDIUM: '#ea580c',
    LOW: '#16a34a'
  };
  return colors[level] || colors.LOW;
};

export const highlightThreats = async (container: HTMLElement, scanResult: ScanResult): Promise<void> => {
  console.log('Starting highlighting process');
  removeExistingHighlights(container);

  const suspiciousContent = scanResult.contentAnalysis.suspiciousContent;
  console.log('Found suspicious content:', suspiciousContent);

  const processTextNode = async (node: Text): Promise<void> => {
    const content = node.textContent || '';
    console.log('Processing text node:', content);
    
    // Check for matches
    for (const suspicious of suspiciousContent) {
      const searchText = content.toLowerCase();
      const targetText = suspicious.text.toLowerCase();
      const index = searchText.indexOf(targetText);
      
      if (index !== -1) {
        console.log('Found match:', {
          text: suspicious.text,
          severity: suspicious.severity,
          index
        });

        try {
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + suspicious.text.length);

          const span = document.createElement('span');
          span.className = 'ai-sentinel-highlight';
          span.dataset.level = suspicious.severity;
          span.dataset.levelText = await translate(`${suspicious.severity} Risk`);
          span.dataset.reason = await translate(suspicious.reason);
          
          range.surroundContents(span);
          console.log('Successfully highlighted with level:', suspicious.severity);
          return; // Exit after modification as DOM has changed
        } catch (e) {
          console.error('Failed to highlight:', e);
        }
      }
    }
  };

  // Walk through all text nodes
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (parent?.classList.contains('ai-sentinel-highlight') ||
            parent?.tagName === 'SCRIPT' ||
            parent?.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node: Text | null;
  const nodes: Text[] = [];
  while ((node = walker.nextNode() as Text)) {
    nodes.push(node);
  }
  await Promise.all(nodes.map(node => processTextNode(node)));

  setupTooltips(container);
};

const removeExistingHighlights = (container: HTMLElement): void => {
  const highlights = container.querySelectorAll('.ai-sentinel-highlight');
  highlights.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent || ''), el);
    }
  });
  container.normalize();
};

const setupTooltips = (container: HTMLElement): void => {
  // Remove any existing tooltip
  const existingTooltip = document.getElementById('ai-sentinel-tooltip');
  existingTooltip?.remove();

  // Create new tooltip
  const tooltip = document.createElement('div');
  tooltip.id = 'ai-sentinel-tooltip';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  const showTooltip = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('ai-sentinel-highlight')) return;

    const level = target.dataset.level as ThreatLevel;
    const levelText = target.dataset.levelText || '';
    const reason = target.dataset.reason || '';
    const threatColor = getThreatColor(level);

    tooltip.innerHTML = `
      <div class="tooltip-level" style="color: ${threatColor}">
        ${levelText}
      </div>
      <div class="tooltip-reason">${reason}</div>
    `;

    // Position tooltip above the hovered text
    const rect = target.getBoundingClientRect();
    const tooltipHeight = tooltip.offsetHeight;
    
    // Calculate position relative to mouse and element
    const mouseX = e.clientX;
    const elementCenterX = rect.left + (rect.width / 2);
    const offsetX = mouseX - elementCenterX;

    // Position tooltip, ensuring it stays within viewport
    let left = mouseX - (tooltip.offsetWidth / 2);
    const minLeft = 10;
    const maxLeft = window.innerWidth - tooltip.offsetWidth - 10;
    left = Math.min(Math.max(left, minLeft), maxLeft);

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${rect.top - tooltipHeight - 8}px`;
    tooltip.style.display = 'block';
  };

  const hideTooltip = () => {
    tooltip.style.display = 'none';
  };

  // Track highlighted elements for event handling
  const highlights = container.querySelectorAll('.ai-sentinel-highlight');
  highlights.forEach(element => {
    element.addEventListener('mousemove', showTooltip as EventListener);
    element.addEventListener('mouseleave', hideTooltip);
  });
};

export const cleanupHighlights = (container: HTMLElement): void => {
  removeExistingHighlights(container);
  const tooltip = document.getElementById('ai-sentinel-tooltip');
  tooltip?.remove();
};