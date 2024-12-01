<template>
  <div class="ai-scanner-container">
    <GmailPhishingScannerLoading v-if="isLoading" />
    <template v-else>
      <GmailPhishingScannerError v-if="error" :message="error" />
      <template v-else-if="scanResult">
        <GmailPhishingScannerWarning
          v-if="scanResult.contentAnalysis.analysis.risk === 'HIGH'"
          :result="scanResult"
        />
        <GmailPhishingScannerThreats
          v-if="scanResult.contentAnalysis.suspiciousContent.length > 0"
          :result="scanResult"
        />
        <GmailPhishingScannerSafe v-else :result="scanResult" />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ScanResult } from './types'
import GmailPhishingScannerLoading from './GmailPhishingScannerLoading.vue'
import GmailPhishingScannerWarning from './GmailPhishingScannerWarning.vue'
import GmailPhishingScannerThreats from './GmailPhishingScannerThreats.vue'
import GmailPhishingScannerError from './GmailPhishingScannerError.vue'
import GmailPhishingScannerSafe from './GmailPhishingScannerSafe.vue'

const isLoading = ref(true)
const scanResult = ref<ScanResult | null>(null)
const error = ref<string | null>(null)

defineExpose({
  updateResults: (result: ScanResult) => {
    error.value = null
    scanResult.value = result
    isLoading.value = false
  },
  setError: (errorMessage: string) => {
    error.value = errorMessage
    scanResult.value = null
    isLoading.value = false
  },
})
</script>

<style scoped>
.ai-scanner {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  font-size: 14px;
  margin: 12px 0;
  opacity: 0;
  animation: fade-in 0.3s ease forwards;
}

.ai-scanner-results {
  background: #fff;
  border: 1px solid #fad2cf;
  border-radius: 6px;
  overflow: hidden;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
