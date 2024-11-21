<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ScanResult } from './types';
import GmailPhishingScannerLoading from './GmailPhishingScannerLoading.vue';
import GmailPhishingScannerWarning from './GmailPhishingScannerWarning.vue';
import GmailPhishingScannerThreats from './GmailPhishingScannerThreats.vue';
import GmailPhishingScannerError from './GmailPhishingScannerError.vue';
import GmailPhishingScannerSafe from './GmailPhishingScannerSafe.vue';

const isLoading = ref(true);
const scanResult = ref<ScanResult | null>(null);
const error = ref<string | null>(null);

// Method to be called from outside to update the state
const updateResults = (result: ScanResult) => {
  error.value = null;
  scanResult.value = result;
  isLoading.value = false;
};

const setError = (errorMessage: string) => {
  error.value = errorMessage;
  scanResult.value = null;
  isLoading.value = false;
};

const isHighRisk = computed(() => {
  if (!scanResult.value) return false;
  
  const highThreats = scanResult.value.contentAnalysis.suspiciousContent.filter(
    content => content.severity === 'HIGH'
  ).length;
  
  const totalThreats = scanResult.value.contentAnalysis.suspiciousContent.length;
  
  // Consider high risk if:
  // 1. There are any HIGH severity threats, or
  // 2. More than 3 MEDIUM threats
  return highThreats > 0 || (totalThreats > 3);
});

// Expose the method to the parent
defineExpose({
  updateResults,
  setError
});
</script>

<template>
  <div class="ai-scanner">
    <template v-if="isLoading">
      <GmailPhishingScannerLoading />
    </template>
    <template v-else-if="error">
      <GmailPhishingScannerError :message="error" />
    </template>
    <template v-else-if="scanResult">
      <div class="ai-scanner-results">
        <template v-if="isHighRisk">
          <GmailPhishingScannerWarning />
          <GmailPhishingScannerThreats :result="scanResult" />
        </template>
        <template v-else>
          <GmailPhishingScannerSafe :result="scanResult" />
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.ai-scanner {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>