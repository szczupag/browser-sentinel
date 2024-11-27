import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from './index'

describe('Main Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Toggles display warnings setting', async () => {
    const store = useMainStore()
    expect(store.displayWarnings).toBe(true)
    await store.toggleDisplayWarnings()
    expect(store.displayWarnings).toBe(false)
  })

  it('Loads settings', async () => {
    const store = useMainStore()
    await store.loadSettings()
    expect(store.displayWarnings).toBe(true)
  })

  it('Saves settings', async () => {
    const store = useMainStore()
    await store.saveSettings()
    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      displayWarnings: true,
      contentAnalysis: null,
      domainAnalysis: null,
      status: null,
    })
  })
})
