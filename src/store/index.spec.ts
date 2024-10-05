import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from './index'
import { chrome } from '../../testSetup'

describe('Main Store', () => {
  beforeEach(() => {
    chrome.storage.sync.get.mockImplementation((keys, callback) => {
      callback({ displayWarnings: true })
    })
    setActivePinia(createPinia())
  })

  afterEach(() => {
    chrome.storage.sync.get.mockClear()
  })

  it('Toggles display warnings setting', () => {
    const store = useMainStore()
    expect(store.displayWarnings).toBe(true)
    store.toggleDisplayWarnings()
    expect(store.displayWarnings).toBe(false)
  })

  it('Loads settings', async () => {
    const store = useMainStore()
    await store.loadSettings()
    expect(store.displayWarnings).toBe(true)
  })

  it('Saves settings', () => {
    const store = useMainStore()
    store.saveSettings()
    expect(chrome.storage.sync.set).toHaveBeenCalledWith({ displayWarnings: true })
  })
})
