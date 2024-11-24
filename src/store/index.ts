import { defineStore } from 'pinia'

interface DomainAnalysis {
  isSuspicious: boolean
  legitimateDomain?: string
  distance?: number
  similarity?: number
}

interface ContentAnalysis {
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
    toggleDisplayWarnings() {
      this.displayWarnings = !this.displayWarnings
      this.saveSettings()
    },
    saveSettings() {
      chrome.storage.sync.set({ displayWarnings: this.displayWarnings })
    },
    loadSettings() {
      chrome.storage.sync.get(['displayWarnings'], (result) => {
        if (chrome.runtime.lastError) {
          console.error('Error loading settings:', chrome.runtime.lastError)
          return
        }
        if (result.displayWarnings !== undefined) {
          this.displayWarnings = result.displayWarnings
        }
      })
    },
  },
})
