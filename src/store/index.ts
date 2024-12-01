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
  displaySuspiciousDomainAlerts: boolean
  highlightSuspiciousUGC: boolean
  highlightSuspiciousEmailContent: boolean
  domainAnalysis: DomainAnalysis | null
  contentAnalysis: ContentAnalysis | null
  status: AnalysisStatus | null
}

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    displaySuspiciousDomainAlerts: true,
    highlightSuspiciousUGC: true,
    highlightSuspiciousEmailContent: true,
    domainAnalysis: null,
    contentAnalysis: null,
    status: null,
  }),

  actions: {
    async initialize() {
      await this.loadSettings()

      // Add storage change listener
      chrome.storage.local.onChanged.addListener(
        async (changes: { [key: string]: chrome.storage.StorageChange }) => {
          const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
          const currentTabId = tabs[0]?.id
          if (!currentTabId) return

          console.log('Storage changes:', changes)

          // Update store based on changes
          for (const [key, { newValue }] of Object.entries(changes)) {
            if (key === 'displaySuspiciousDomainAlerts') {
              this.displaySuspiciousDomainAlerts = newValue ?? true
            } else if (key === 'highlightSuspiciousUGC') {
              this.highlightSuspiciousUGC = newValue ?? true
            } else if (key === 'highlightSuspiciousEmailContent') {
              this.highlightSuspiciousEmailContent = newValue ?? true
            } else if (key === `tab_${currentTabId}_domainAnalysis`) {
              this.domainAnalysis = newValue ?? null
            } else if (key === `tab_${currentTabId}_contentAnalysis`) {
              this.contentAnalysis = newValue ?? null
            } else if (key === `tab_${currentTabId}_status`) {
              this.status = newValue ?? null
            }
          }
        }
      )
    },

    async loadSettings() {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      const currentTabId = tabs[0]?.id
      if (!currentTabId) throw new Error('No active tab found')

      const settings = await chrome.storage.local.get([
        'displaySuspiciousDomainAlerts',
        'highlightSuspiciousUGC',
        'highlightSuspiciousEmailContent',
        `tab_${currentTabId}_domainAnalysis`,
        `tab_${currentTabId}_contentAnalysis`,
        `tab_${currentTabId}_status`,
      ])

      this.$patch({
        displaySuspiciousDomainAlerts: settings.displaySuspiciousDomainAlerts ?? true,
        highlightSuspiciousUGC: settings.highlightSuspiciousUGC ?? true,
        highlightSuspiciousEmailContent: settings.highlightSuspiciousEmailContent ?? true,
        domainAnalysis: settings[`tab_${currentTabId}_domainAnalysis`] ?? null,
        contentAnalysis: settings[`tab_${currentTabId}_contentAnalysis`] ?? null,
        status: settings[`tab_${currentTabId}_status`] ?? null,
      })
    },

    async saveSettings() {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
      const currentTabId = tabs[0]?.id
      if (!currentTabId) throw new Error('No active tab found')

      await chrome.storage.local.set({
        displaySuspiciousDomainAlerts: this.displaySuspiciousDomainAlerts,
        highlightSuspiciousUGC: this.highlightSuspiciousUGC,
        highlightSuspiciousEmailContent: this.highlightSuspiciousEmailContent,
        [`tab_${currentTabId}_domainAnalysis`]: this.domainAnalysis,
        [`tab_${currentTabId}_contentAnalysis`]: this.contentAnalysis,
        [`tab_${currentTabId}_status`]: this.status,
      })
    },

    toggleSuspiciousDomainAlerts() {
      this.displaySuspiciousDomainAlerts = !this.displaySuspiciousDomainAlerts
      this.saveSettings()
    },

    toggleSuspiciousUGC() {
      this.highlightSuspiciousUGC = !this.highlightSuspiciousUGC
      this.saveSettings()
    },

    toggleSuspiciousEmailContent() {
      this.highlightSuspiciousEmailContent = !this.highlightSuspiciousEmailContent
      this.saveSettings()
    },
  },
})
