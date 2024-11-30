import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { handleTabRemoved, updateExtensionIcon } from './background'
import { AnalysisStatus } from './constants/analysisStatus'
import { RiskLevel } from './constants/riskLevels'
import { IconType } from './constants/iconType'

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

  describe('Icon Updates', () => {
    beforeEach(() => {
      chrome.action.setIcon = vi.fn().mockImplementation((options, callback) => {
        callback?.()
        return Promise.resolve()
      })
    })

    it('Sets analyzing icon when starting domain analysis', async () => {
      await updateExtensionIcon(
        {
          status: AnalysisStatus.STARTING_DOMAIN_ANALYSIS,
        },
        123
      )

      expect(chrome.action.setIcon).toHaveBeenCalledWith(
        {
          path: {
            '16': `/icons/16/BrowserSentinel-${IconType.ANALYZING}.png`,
            '32': `/icons/32/BrowserSentinel-${IconType.ANALYZING}.png`,
            '48': `/icons/48/BrowserSentinel-${IconType.ANALYZING}.png`,
            '128': `/icons/128/BrowserSentinel-${IconType.ANALYZING}.png`,
          },
          tabId: 123,
        },
        expect.any(Function)
      )
    })

    it('Sets suspicious icon when domain is suspicious during content analysis', async () => {
      await updateExtensionIcon(
        {
          status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
          domainAnalysis: {
            isSuspicious: true,
          },
        },
        123
      )

      expect(chrome.action.setIcon).toHaveBeenCalledWith(
        {
          path: {
            '16': `/icons/16/BrowserSentinel-${IconType.SUSPICIOUS}.png`,
            '32': `/icons/32/BrowserSentinel-${IconType.SUSPICIOUS}.png`,
            '48': `/icons/48/BrowserSentinel-${IconType.SUSPICIOUS}.png`,
            '128': `/icons/128/BrowserSentinel-${IconType.SUSPICIOUS}.png`,
          },
          tabId: 123,
        },
        expect.any(Function)
      )
    })

    it('Sets safe icon when analysis is finished with low risk', async () => {
      await updateExtensionIcon(
        {
          status: AnalysisStatus.ANALYSIS_FINISHED,
          contentAnalysis: {
            overallRiskScore: RiskLevel.LOW,
          },
        },
        123
      )

      expect(chrome.action.setIcon).toHaveBeenCalledWith(
        {
          path: {
            '16': `/icons/16/BrowserSentinel-${IconType.SAFE}.png`,
            '32': `/icons/32/BrowserSentinel-${IconType.SAFE}.png`,
            '48': `/icons/48/BrowserSentinel-${IconType.SAFE}.png`,
            '128': `/icons/128/BrowserSentinel-${IconType.SAFE}.png`,
          },
          tabId: 123,
        },
        expect.any(Function)
      )
    })
  })
})
