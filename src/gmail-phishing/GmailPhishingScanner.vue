<script setup lang="ts">
import { ref } from 'vue';
import type { ScanResult } from './types';
import GmailPhishingScannerLoading from './GmailPhishingScannerLoading.vue';
import GmailPhishingScannerWarning from './GmailPhishingScannerWarning.vue';
import GmailPhishingScannerThreats from './GmailPhishingScannerThreats.vue';
import GmailPhishingScannerError from './GmailPhishingScannerError.vue';

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
        <GmailPhishingScannerWarning 
          v-if="scanResult.contentAnalysis.analysis.risk === 'HIGH' || scanResult.contentAnalysis.suspiciousContent.filter(e => e.severity === 'HIGH').length > 0" 
        />
        <GmailPhishingScannerThreats 
          :result="scanResult" 
        />
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