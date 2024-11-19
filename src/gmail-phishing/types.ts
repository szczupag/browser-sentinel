export type ThreatLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Threat {
  level: ThreatLevel;
  description: string;
  confidence: ThreatLevel;
}

export interface ThreatMatch {
  text: string;
  threat: Threat;
}

export type ScanResult = {
  urlAnalysis: {
    urls: {
      displayText: string;
      actualUrl: string;
      domain: string;
      suspicious: boolean;
      reasons: string[];
    }[];
    safeBrowsingThreats: {
      [key: string]: boolean;
    };
  };
  contentAnalysis: {
    suspiciousContent: {
      text: string;
      severity: ThreatLevel;
      reason: string;
    }[];
    analysis: {
      risk: ThreatLevel;
      confidence: ThreatLevel;
      safe: boolean;
      recommendation: string;
    };
  };
  timestamp: string;
};

// Configuration for the scanner UI
export interface ScannerConfig {
  // Element where to inject the status bar
  statusContainer: HTMLElement;
  // Element containing the email content to scan
  emailContainer: HTMLElement;
}
