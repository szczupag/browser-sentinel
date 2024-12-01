<template>
  <div class="ai-scanner-status">
    <div><t text="Analysis Complete" /></div>
    <div class="ai-scanner-threats">
      <div v-if="result.highThreats > 0" class="threat-indicator">
        <div class="threat-dot high"></div>
        <span><t :text="`${result.highThreats} high risk`" /></span>
      </div>
      <div v-if="result.mediumThreats > 0" class="threat-indicator">
        <div class="threat-dot medium"></div>
        <span><t :text="`${result.mediumThreats} medium risk`" /></span>
      </div>
      <div v-if="result.lowThreats > 0" class="threat-indicator">
        <div class="threat-dot low"></div>
        <span><t :text="`${result.lowThreats} low risk`" /></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from '../components/TranslateText.vue';
import { computed } from 'vue';
import type { ScanResult } from './types';

const props = defineProps<{
  result: ScanResult;
}>();
const result = computed(() => {
  const threats = {
    highThreats: 0,
    mediumThreats: 0, 
    lowThreats: 0
  };

  props.result.contentAnalysis.suspiciousContent.forEach(el => {
    switch (el.severity) {
      case 'HIGH':
        threats.highThreats++;
        break;
      case 'MEDIUM':
        threats.mediumThreats++;
        break;
      case 'LOW':
        threats.lowThreats++;
        break;
    }
  });

  return threats;
});

</script>
<style scoped>
.ai-scanner-status {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ai-scanner-threats {
  display: flex;
  gap: 16px;
}

.threat-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5f6368;
  font-size: 13px;
}

.threat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: blink 1s ease-in-out infinite;
}

.threat-dot.high { background: #c5221f; }
.threat-dot.medium { background: #f29900; }
.threat-dot.low { background: #188038; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>