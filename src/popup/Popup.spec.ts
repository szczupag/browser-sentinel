import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Popup from './Popup.vue'

describe('Popup', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Renders popup page properly', () => {
    const wrapper = mount(Popup)
    expect(wrapper.text()).toContain('Shield')
    expect(wrapper.text()).toContain('Display warnings')
  })

  it('Displays enabled warning toggle', () => {
    const wrapper = mount(Popup)
    expect(wrapper.text()).toContain('Warnings are currently enabled')
  })

  it('Disables warnings on toggle on click', async () => {
    const wrapper = mount(Popup)
    await wrapper.find('input[type="checkbox"]').trigger('change')
    expect(wrapper.text()).toContain('Warnings are currently disabled')
  })
})
