import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useMainStore } from '../store'
import Popup from './Popup.vue'
import { AnalysisStatus } from '../constants/analysisStatus'
import { RiskLevel } from '../constants/riskLevels'
import { ComponentPublicInstance } from 'vue'

describe('Popup', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>
  let store: ReturnType<typeof useMainStore>

  beforeEach(async () => {
    vi.clearAllMocks()
    setActivePinia(createPinia())
    store = useMainStore()
    await store.initialize()
    wrapper = mount(Popup)
    vi.mock('../utils/translate', () => ({
      translate: vi.fn().mockImplementation((text) => Promise.resolve(text))
    }))
  })

  it('Renders popup header', () => {
    expect(wrapper.find('h1').text()).toBe('Browser Sentinel')
  })

  it('Renders preferences section with correct labels', () => {
    expect(wrapper.find('.settings-section h2').text()).toBe('Preferences')

    const settingLabels = wrapper.findAll('.setting-info label')
    expect(settingLabels[0].text()).toBe('Display Domain Warnings')
    expect(settingLabels[1].text()).toBe('Highlight UGC Threats')
    expect(settingLabels[2].text()).toBe('Display Email Analysis')
  })

  it('Renders preferences section with correct descriptions', () => {
    const descriptions = wrapper.findAll('.setting-description')
    expect(descriptions[0].text()).toBe(
      'Get alerts for potentially malicious or suspicious domains while browsing.'
    )
    expect(descriptions[1].text()).toBe(
      'Identify and flag risky user-generated content such as comments or messages.'
    )
    expect(descriptions[2].text()).toBe(
      'Scan emails to detect and highlight potential threats or phishing attempts.'
    )
  })

  it('Toggles domain alerts preference', async () => {
    const checkbox = wrapper.find('#display-warnings-setting')
    expect(store.displaySuspiciousDomainAlerts).toBe(true)

    await checkbox.setValue(false)
    expect(store.displaySuspiciousDomainAlerts).toBe(false)

    await checkbox.setValue(true)
    expect(store.displaySuspiciousDomainAlerts).toBe(true)
  })

  it('Toggles UGC highlights preference', async () => {
    const checkbox = wrapper.find('#highlight-ugc-setting')
    expect(store.highlightSuspiciousUGC).toBe(true)

    await checkbox.setValue(false)
    expect(store.highlightSuspiciousUGC).toBe(false)

    await checkbox.setValue(true)
    expect(store.highlightSuspiciousUGC).toBe(true)
  })

  it('Toggles email analysis preference', async () => {
    const checkbox = wrapper.find('#highlight-email-setting')
    expect(store.highlightSuspiciousEmailContent).toBe(true)

    await checkbox.setValue(false)
    expect(store.highlightSuspiciousEmailContent).toBe(false)

    await checkbox.setValue(true)
    expect(store.highlightSuspiciousEmailContent).toBe(true)
  })

  it('Shows starting analysis state', async () => {
    await store.$patch({
      status: AnalysisStatus.STARTING_DOMAIN_ANALYSIS,
    })

    expect(wrapper.find('.status-indicator span').text()).toBe('Starting security analysis...')
    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
  })

  it('Shows domain analysis when content analysis is starting', async () => {
    await store.$patch({
      status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
      domainAnalysis: {
        isSuspicious: true,
        legitimateDomain: 'example.com',
      },
    })

    const section = wrapper.find('.analysis-section')
    expect(section.find('h2').text()).toBe('Domain Analysis')
    expect(section.find('.result span').text()).toBe('SUSPICIOUS')
    expect(section.findAll('.result')[1].find('span').text()).toBe('example.com')
  })

  it('Shows both analyses when finished', async () => {
    await store.$patch({
      status: AnalysisStatus.ANALYSIS_FINISHED,
      domainAnalysis: {
        isSuspicious: false,
      },
      contentAnalysis: {
        overallRiskScore: RiskLevel.LOW,
        overallConfidence: RiskLevel.HIGH,
      },
    })

    const sections = wrapper.findAll('.analysis-section')
    expect(sections).toHaveLength(2)
    expect(sections[0].findAll('.result span')[0].text()).toBe('SAFE')
    expect(sections[1].findAll('.result span')[0].text()).toBe('LOW')
    expect(sections[1].findAll('.result span')[1].text()).toBe('HIGH')
  })

  it('Calculates correct domain status classes', async () => {
    await store.$patch({
      domainAnalysis: { isSuspicious: false },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })
    await wrapper.vm.$nextTick()

    const domainSection = wrapper.findAll('.analysis-section')[0]
    expect(domainSection.classes()).toContain('severity-low')

    await store.$patch({
      domainAnalysis: { isSuspicious: true },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })
    await wrapper.vm.$nextTick()

    expect(domainSection.classes()).toContain('severity-high')
  })

  it('Calculates correct content risk classes', async () => {
    await store.$patch({
      contentAnalysis: {
        overallRiskScore: RiskLevel.LOW,
        overallConfidence: RiskLevel.LOW,
      },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })
    await wrapper.vm.$nextTick()

    const contentSection = wrapper.findAll('.analysis-section')[1]
    expect(contentSection.exists()).toBe(true)
    expect(contentSection.classes()).toContain('severity-low')

    await store.$patch({
      contentAnalysis: {
        overallRiskScore: RiskLevel.MEDIUM,
        overallConfidence: RiskLevel.HIGH,
      },
      status: AnalysisStatus.ANALYSIS_FINISHED,
    })
    await wrapper.vm.$nextTick()

    expect(contentSection.classes()).toContain('severity-medium')
  })
})
