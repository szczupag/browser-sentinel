<template>
  <button
    class="threat-icon"
    :class="severityClass"
    @click="showAlert"
    :aria-label="`Show ${severity.toLowerCase()} risk warning`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  severity: 'HIGH' | 'MEDIUM' | 'LOW'
  analysis: any
}>()

const severityClass = computed(() => `severity-${props.severity.toLowerCase()}`)

const showAlert = () => {
  const event = new CustomEvent('show-ugc-alert', {
    detail: props.analysis,
    bubbles: true,
  })
  document.dispatchEvent(event)
}
</script>
