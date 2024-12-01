<template>
  <div class="ai-scanner-safe">
    <div class="safe-status">
      <template v-if="getStatus(result) === 'clean'">
        <div class="icon-container clean">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div class="message-container">
          <div class="title clean"><t text="No Suspicious Content Detected" /></div>
          <div class="description">
            <t
              text="Our AI analysis didn't detect any concerning patterns in this email. However, always use your judgment
            as new scam tactics emerge regularly."
            />
          </div>
        </div>
      </template>

      <template v-else-if="getStatus(result) === 'lowRisk'">
        <div class="icon-container low-risk">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z"
              id="path2"
            />
          </svg>
        </div>
        <div class="message-container">
          <div class="title low-risk"><t text="Minor Patterns Detected" /></div>
          <div class="description">
            <t
              text="We found some patterns that sometimes appear in suspicious emails, but they're likely normal in this context. 
            Review highlighted content if you're unsure."
            />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="icon-container minor-concerns">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z"
              id="path2"
            />
          </svg>
        </div>
        <div class="message-container">
          <div class="title minor-concerns"><t text="Some Elements Need Attention" /></div>
          <div class="description">
            <t
              text="We've detected a few potentially concerning elements. While this might be a legitimate email,
            review the highlighted content carefully before taking any actions."
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from './TranslateText.vue'
import type { ScanResult } from './types'

defineProps<{
  result: ScanResult
}>()

// Determine if it's completely clean or just low risk
const getStatus = (result: ScanResult) => {
  const totalThreats = result.contentAnalysis.suspiciousContent.length
  const hasMediumThreats = result.contentAnalysis.suspiciousContent.some(
    (content) => content.severity === 'MEDIUM'
  )

  if (totalThreats === 0) {
    return 'clean'
  } else if (!hasMediumThreats) {
    return 'lowRisk'
  }
  return 'minorConcerns'
}
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
