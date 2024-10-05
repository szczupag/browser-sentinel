import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    displayWarnings: true,
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
