import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { handleTabRemoved } from './background.ts'

describe('Background Script', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    chrome.tabs.onRemoved.addListener.mockClear()
  })

  it('Cleans up tab data when tab is closed', async () => {
    // Simulate stored data
    const mockStorageData = {
      displayWarnings: true,
      tab_123_domainAnalysis: { isSuspicious: false },
      tab_123_contentAnalysis: { overallRiskScore: 'LOW' },
      tab_123_status: 'ANALYSIS_FINISHED',
      tab_456_domainAnalysis: { isSuspicious: true },
    }

    // Setup the storage.local.get mock to immediately execute callback
    chrome.storage.local.get = vi.fn().mockImplementation((keys, callback) => {
      callback(mockStorageData)
      return Promise.resolve(mockStorageData)
    })

    // Add mock for storage.local.remove to properly resolve
    chrome.storage.local.remove = vi.fn().mockImplementation((keys, callback) => {
      callback?.()
      return Promise.resolve()
    })

    // Call the handler
    await handleTabRemoved(123)

    // Verify correct keys were removed
    expect(chrome.storage.local.remove).toHaveBeenCalledWith(
      expect.arrayContaining([
        'tab_123_domainAnalysis',
        'tab_123_contentAnalysis',
        'tab_123_status',
      ]),
      expect.any(Function)
    )

    // Verify other tab's data wasn't removed
    const [[keysToRemove]] = chrome.storage.local.remove.mock.calls
    expect(keysToRemove).not.toContain('tab_456_domainAnalysis')
  })
})
