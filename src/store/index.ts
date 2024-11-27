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

        // Get current tab ID
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const currentTabId = tabs[0]?.id
          if (!currentTabId) return

          for (const [key, { newValue }] of Object.entries(changes)) {
            if (key === 'displayWarnings') {
              this.displayWarnings = newValue
            } else if (key === `tab_${currentTabId}_domainAnalysis`) {
              this.domainAnalysis = newValue
            } else if (key === `tab_${currentTabId}_contentAnalysis`) {
              this.contentAnalysis = newValue
            } else if (key === `tab_${currentTabId}_status`) {
              this.status = newValue
            }
          }
        })
      })
    },

    async loadSettings() {
      try {
        // Get current tab ID
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
        const currentTabId = tabs[0]?.id
        if (!currentTabId) throw new Error('No active tab found')

        const data = await chrome.storage.local.get([
          'displayWarnings',
          `tab_${currentTabId}_domainAnalysis`,
          `tab_${currentTabId}_contentAnalysis`,
          `tab_${currentTabId}_status`,
        ])

        // Set defaults if data is empty
        this.displayWarnings = data.displayWarnings ?? true
        this.domainAnalysis = data[`tab_${currentTabId}_domainAnalysis`] ?? null
        this.contentAnalysis = data[`tab_${currentTabId}_contentAnalysis`] ?? null
        this.status = data[`tab_${currentTabId}_status`] ?? null

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
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      const currentTabId = tabs[0]?.id
      if (!currentTabId) throw new Error('No active tab found')

      await chrome.storage.local.set({
        displayWarnings: this.displayWarnings,
        [`tab_${currentTabId}_domainAnalysis`]: this.domainAnalysis,
        [`tab_${currentTabId}_contentAnalysis`]: this.contentAnalysis,
        [`tab_${currentTabId}_status`]: this.status,
      })
    },

    toggleDisplayWarnings() {
      this.displayWarnings = !this.displayWarnings
      this.saveSettings()
    },
  },
})
