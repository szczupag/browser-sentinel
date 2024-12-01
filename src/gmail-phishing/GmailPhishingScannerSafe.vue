<template>
  <div class="ai-scanner-safe">
    <div class="safe-status">
      <template v-if="getStatus(result) === 'clean'">
        <div class="icon-container clean">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div class="message-container">
          <div class="title clean"><t text="No Suspicious Content Detected" /></div>
          <div class="description">
            <t text="Our AI analysis didn't detect any concerning patterns in this email. However, always use your judgment
            as new scam tactics emerge regularly." />
          </div>
        </div>
      </template>

      <template v-else-if="getStatus(result) === 'lowRisk'">
        <div class="icon-container low-risk">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="message-container">
          <div class="title low-risk"><t text="Minor Patterns Detected" /></div>
          <div class="description">
            <t text="We found some patterns that sometimes appear in suspicious emails, but they're likely normal in this context. 
            Review highlighted content if you're unsure." />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="icon-container minor-concerns">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="message-container">
          <div class="title minor-concerns"><t text="Some Elements Need Attention" /></div>
          <div class="description">
            <t text="We've detected a few potentially concerning elements. While this might be a legitimate email,
            review the highlighted content carefully before taking any actions." />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from '../components/TranslateText.vue';
import type { ScanResult } from './types';

defineProps<{
  result: ScanResult;
}>();

// Determine if it's completely clean or just low risk
const getStatus = (result: ScanResult) => {
  const totalThreats = result.contentAnalysis.suspiciousContent.length;
  const hasMediumThreats = result.contentAnalysis.suspiciousContent.some(
    content => content.severity === 'MEDIUM'
  );
  
  if (totalThreats === 0) {
    return 'clean';
  } else if (!hasMediumThreats) {
    return 'lowRisk';
  }
  return 'minorConcerns';
};
</script>
<style scoped>
.ai-scanner-safe {
  padding: 16px;
  margin: 12px 0;
}

.safe-status {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.icon-container {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.icon-container svg {
  width: 24px;
  height: 24px;
}

.icon-container.clean {
  color: #16a34a;
}

.icon-container.low-risk {
  color: #ca8a04;
}

.icon-container.minor-concerns {
  color: #ea580c;
}

.message-container {
  flex: 1;
}

.title {
  font-weight: 600;
  margin-bottom: 4px;
}

.title.clean {
  color: #16a34a;
}

.title.low-risk {
  color: #ca8a04;
}

.title.minor-concerns {
  color: #ea580c;
}

.description {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.disclaimer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
  font-style: italic;
}
</style>