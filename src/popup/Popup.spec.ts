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
  })

  it('Renders popup header', () => {
    expect(wrapper.find('h1').text()).toBe('Browser Sentinel')
  })

  it('Renders preferences section', () => {
    expect(wrapper.find('.settings-section h2').text()).toBe('Preferences')
    expect(wrapper.find('label[for="display-warnings-setting"]').text()).toBe('Display warnings')
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

  it('Toggles display warnings setting', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]')

    // Verify initial state
    expect(store.displayWarnings).toBe(true)

    // Trigger the change
    await checkbox.setValue(false)
    await wrapper.vm.$nextTick()

    // Verify the change
    expect(store.displayWarnings).toBe(false)
  })
})
