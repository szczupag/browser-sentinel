import { defineStore } from 'pinia'
import { AnalysisStatus } from '../constants/analysisStatus'
import { RiskLevel } from '../constants/riskLevels'

export interface DomainAnalysis {
  isSuspicious: boolean
  legitimateDomain?: string
}

export interface ContentAnalysis {
  overallRiskScore: RiskLevel
  overallConfidence: RiskLevel
  violations: Array<{
    rule: string
    severity: RiskLevel
    explanation: string
  }>
}

export interface MainState {
  displayWarnings: boolean
  domainAnalysis: DomainAnalysis | null
  contentAnalysis: ContentAnalysis | null
  status: AnalysisStatus | null
}

export const useMainStore = defineStore('main', {
  state: () => ({
    displayWarnings: true,
    domainAnalysis: null as DomainAnalysis | null,
    contentAnalysis: null as ContentAnalysis | null,
    status: null as AnalysisStatus | null,
  }),

  actions: {
    async initialize() {
      await this.loadSettings()

      // Listen for storage changes
      chrome.storage.local.onChanged.addListener((changes) => {
        console.log('Storage changed:', changes)
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key === 'domainAnalysis') {
            this.domainAnalysis = newValue
          } else if (key === 'contentAnalysis') {
            this.contentAnalysis = newValue
          } else if (key === 'displayWarnings') {
            this.displayWarnings = newValue
          } else if (key === 'status') {
            this.status = newValue
          }
        }
      })
    },

    async loadSettings() {
      try {
        const data = await chrome.storage.local.get([
          'displayWarnings',
          'domainAnalysis',
          'contentAnalysis',
          'status',
        ])

        // Set defaults if data is empty
        this.displayWarnings = data.displayWarnings ?? true
        this.domainAnalysis = data.domainAnalysis ?? null
        this.contentAnalysis = data.contentAnalysis ?? null
        this.status = data.status ?? null

        console.log('Loaded settings:', data)
      } catch (error) {
        console.error('Failed to load settings:', error)
        // Set defaults on error
        this.displayWarnings = true
        this.domainAnalysis = null
        this.contentAnalysis = null
        this.status = null
      }
    },

    async saveSettings() {
      await chrome.storage.local.set({
        displayWarnings: this.displayWarnings,
        domainAnalysis: this.domainAnalysis,
        contentAnalysis: this.contentAnalysis,
        status: this.status,
      })
    },

    toggleDisplayWarnings() {
      this.displayWarnings = !this.displayWarnings
      this.saveSettings()
    },
  },
})
