import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from './index'
import { AnalysisStatus } from '../constants/analysisStatus'

describe('Main Store', () => {
  const TEST_TAB_ID = 123

  beforeEach(() => {
    setActivePinia(createPinia())
    // Reset chrome.tabs.query mock to return our test tab
    chrome.tabs.query.mockResolvedValue([{ id: TEST_TAB_ID }])
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

  it('Loads settings for current tab', async () => {
    const mockSettings = {
      displayWarnings: true,
      [`tab_${TEST_TAB_ID}_domainAnalysis`]: { isSuspicious: true },
      [`tab_${TEST_TAB_ID}_contentAnalysis`]: { overallRiskScore: 'HIGH' },
      [`tab_${TEST_TAB_ID}_status`]: AnalysisStatus.ANALYSIS_FINISHED,
    }

    chrome.storage.local.get.mockResolvedValueOnce(mockSettings)

    const store = useMainStore()
    await store.loadSettings()

    expect(store.displayWarnings).toBe(true)
    expect(store.domainAnalysis).toEqual({ isSuspicious: true })
    expect(store.contentAnalysis).toEqual({ overallRiskScore: 'HIGH' })
    expect(store.status).toBe(AnalysisStatus.ANALYSIS_FINISHED)
  })

  it('Saves settings for current tab', async () => {
    const store = useMainStore()
    store.$patch({
      displayWarnings: false,
      domainAnalysis: { isSuspicious: true },
      contentAnalysis: { overallRiskScore: 'HIGH' },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })

    await store.saveSettings()

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      displayWarnings: false,
      [`tab_${TEST_TAB_ID}_domainAnalysis`]: { isSuspicious: true },
      [`tab_${TEST_TAB_ID}_contentAnalysis`]: { overallRiskScore: 'HIGH' },
      [`tab_${TEST_TAB_ID}_status`]: AnalysisStatus.ANALYSIS_FINISHED,
    })
  })

  it('Handles missing tab ID when saving settings', async () => {
    chrome.tabs.query.mockResolvedValueOnce([])
    const store = useMainStore()

    await expect(store.saveSettings()).rejects.toThrow('No active tab found')
  })
})
