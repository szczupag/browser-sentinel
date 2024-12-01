import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from './index'
import { AnalysisStatus } from '../constants/analysisStatus'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('Main Store', () => {
  const TEST_TAB_ID = 123

  beforeEach(() => {
    setActivePinia(createPinia())
    chrome.tabs.query.mockResolvedValue([{ id: TEST_TAB_ID }])
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Loads all settings for current tab', async () => {
    const mockSettings = {
      displaySuspiciousDomainAlerts: true,
      highlightSuspiciousUGC: true,
      highlightSuspiciousEmailContent: true,
      [`tab_${TEST_TAB_ID}_domainAnalysis`]: { isSuspicious: true },
      [`tab_${TEST_TAB_ID}_contentAnalysis`]: { overallRiskScore: 'HIGH' },
      [`tab_${TEST_TAB_ID}_status`]: AnalysisStatus.ANALYSIS_FINISHED,
    }

    chrome.storage.local.get.mockResolvedValueOnce(mockSettings)

    const store = useMainStore()
    await store.loadSettings()

    expect(store.displaySuspiciousDomainAlerts).toBe(true)
    expect(store.highlightSuspiciousUGC).toBe(true)
    expect(store.highlightSuspiciousEmailContent).toBe(true)
    expect(store.domainAnalysis).toEqual({ isSuspicious: true })
    expect(store.contentAnalysis).toEqual({ overallRiskScore: 'HIGH' })
    expect(store.status).toBe(AnalysisStatus.ANALYSIS_FINISHED)
  })

  it('Saves all settings for current tab', async () => {
    const store = useMainStore()
    store.$patch({
      displaySuspiciousDomainAlerts: false,
      highlightSuspiciousUGC: false,
      highlightSuspiciousEmailContent: false,
      domainAnalysis: { isSuspicious: true },
      contentAnalysis: { overallRiskScore: 'HIGH' },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })

    await store.saveSettings()

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      displaySuspiciousDomainAlerts: false,
      highlightSuspiciousUGC: false,
      highlightSuspiciousEmailContent: false,
      [`tab_${TEST_TAB_ID}_domainAnalysis`]: { isSuspicious: true },
      [`tab_${TEST_TAB_ID}_contentAnalysis`]: { overallRiskScore: 'HIGH' },
      [`tab_${TEST_TAB_ID}_status`]: AnalysisStatus.ANALYSIS_FINISHED,
    })
  })

  it('Toggles individual preference settings', async () => {
    const store = useMainStore()

    expect(store.displaySuspiciousDomainAlerts).toBe(true)
    await store.toggleSuspiciousDomainAlerts()
    expect(store.displaySuspiciousDomainAlerts).toBe(false)

    expect(store.highlightSuspiciousUGC).toBe(true)
    await store.toggleSuspiciousUGC()
    expect(store.highlightSuspiciousUGC).toBe(false)

    expect(store.highlightSuspiciousEmailContent).toBe(true)
    await store.toggleSuspiciousEmailContent()
    expect(store.highlightSuspiciousEmailContent).toBe(false)
  })
})
