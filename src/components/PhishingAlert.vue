<template>
  <div v-if="isVisible" class="phishing-alert-overlay" @click.self="handleOverlayClick">
    <div class="phishing-alert-container">
      <div class="phishing-alert-header">
        <div class="phishing-alert-header-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span>{{ title }}</span>
        </div>
        <button class="phishing-alert-close" @click="handleClose" aria-label="Close alert">
          <svg
            class="phishing-alert-close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div class="phishing-alert-content">
        <div class="phishing-risk-section">
          <div class="risk-badge">
            <span class="risk-badge-label">Risk Level</span>
            <span class="risk-badge-value" :class="['severity-' + overallRiskScore.toLowerCase()]">
              {{ overallRiskScore }}
            </span>
          </div>
          <div class="risk-badge">
            <span class="risk-badge-label">Confidence</span>
            <span class="risk-badge-value" :class="['severity-' + overallConfidence.toLowerCase()]">
              {{ overallConfidence }}
            </span>
          </div>
        </div>

        <div class="violations-list">
          <h3>Detected Security Risks</h3>
          <div v-for="violation in violations" :key="violation.rule" class="violation-item">
            <div class="violation-header">
              <span class="violation-name">{{ violation.rule }}</span>
              <span :class="['violation-severity', 'severity-' + violation.severity.toLowerCase()]">
                {{ violation.severity }}
              </span>
            </div>
            <p class="violation-description">{{ violation.explanation }}</p>
          </div>
        </div>

        <div v-if="recommendation" class="recommendation">
          <h3>Recommendation</h3>
          <p>{{ recommendation }}</p>
        </div>

        <div class="phishing-actions">
          <button class="phishing-btn phishing-btn-back" @click="handleBack">Leave Site</button>
          <button class="phishing-btn phishing-btn-proceed" @click="handleProceed">
            Proceed Anyway
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  violations: Array<{
    rule: string
    severity: string
    explanation: string
  }>
  overallRiskScore: string
  overallConfidence: string
  recommendation?: string
}>()

const isVisible = ref(true)

const handleClose = () => {
  isVisible.value = false
}

const handleOverlayClick = () => {
  handleClose()
}

const handleBack = () => {
  isVisible.value = false
  window.history.back()
}

const handleProceed = () => {
  isVisible.value = false
}
</script>
