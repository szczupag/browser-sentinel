import { defineStore } from 'pinia'

export interface DomainAnalysis {
  isSuspicious: boolean
  legitimateDomain?: string
}

export interface ContentAnalysis {
  overallRiskScore: 'HIGH' | 'MEDIUM' | 'LOW'
  overallConfidence: 'HIGH' | 'MEDIUM' | 'LOW'
  violations: Array<{
    rule: string
    severity: string
    explanation: string
  }>
}

export const useMainStore = defineStore('main', {
  state: () => ({
    displayWarnings: true,
    domainAnalysis: null as DomainAnalysis | null,
    contentAnalysis: null as ContentAnalysis | null,
  }),

  actions: {
    async initialize() {
      await this.loadSettings()

      // Listen for storage changes
      chrome.storage.onChanged.addListener((changes) => {
        console.log('Storage changed:', changes)
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key === 'domainAnalysis') {
            this.domainAnalysis = newValue
          } else if (key === 'contentAnalysis') {
            this.contentAnalysis = newValue
          } else if (key === 'displayWarnings') {
            this.displayWarnings = newValue
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
        ])

        // Set defaults if data is empty
        this.displayWarnings = data.displayWarnings ?? true
        this.domainAnalysis = data.domainAnalysis ?? null
        this.contentAnalysis = data.contentAnalysis ?? null

        console.log('Loaded settings:', data)
      } catch (error) {
        console.error('Failed to load settings:', error)
        // Set defaults on error
        this.displayWarnings = true
        this.domainAnalysis = null
        this.contentAnalysis = null
      }
    },

    async saveSettings() {
      await chrome.storage.local.set({
        displayWarnings: this.displayWarnings,
        domainAnalysis: this.domainAnalysis,
        contentAnalysis: this.contentAnalysis,
      })
    },

    toggleDisplayWarnings() {
      this.displayWarnings = !this.displayWarnings
      this.saveSettings()
    },
  },
})
