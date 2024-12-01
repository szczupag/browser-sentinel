import { RiskLevel } from "../../constants/riskLevels";

export interface UGCSelectors {
  content: string;
  contentRoot: string;
}

export interface UGCConfig {
  platform: string;
  minLength: number;
  preAnalysisPrompt: string;
  selectors: UGCSelectors;
  debounceTime?: number;
  initialScanDelay?: number;
}

export type PhishingAnalysis = {
  title: string
  violations: {
    rule: string
    severity: RiskLevel
    explanation: string
  }[]
  overallRiskScore: RiskLevel
  overallConfidence: RiskLevel
  isSafe: boolean
  recommendation: string
}