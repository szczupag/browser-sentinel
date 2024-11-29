<template>
  <div v-if="isVisible" class="phishing-alert-overlay" @click.self="handleOverlayClick">
    <div class="phishing-alert-container">
      <!-- Header Section -->
      <div class="phishing-alert-header">
        <div class="phishing-alert-header-content">
          <svg
            class="phishing-alert-header-icon"
            xmlns="http://www.w3.org/2000/svg"
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
        <button class="phishing-alert-close" @click="handleClose">
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

      <!-- Content Section -->
      <div class="phishing-alert-content">
        <!-- Risk Analysis Section -->
        <div class="analysis-section" :class="['severity-' + overallRiskScore.toLowerCase()]">
          <h2>Risk Analysis</h2>
          <div class="result">
            <h3>Risk Level</h3>
            <span>
              {{ overallRiskScore }}
            </span>
          </div>
          <div class="result">
            <h3>Confidence</h3>
            <span>
              {{ overallConfidence }}
            </span>
          </div>
        </div>

        <!-- Violations Section -->
        <h2>Security Risks</h2>
        <div
          v-for="violation in violations"
          :key="violation.rule"
          class="analysis-section"
          :class="['severity-' + violation.severity.toLowerCase()]"
        >
          <div class="violation-header">
            <h3 class="violation-name">{{ violation.rule }}</h3>
            <span>
              {{ violation.severity }}
            </span>
          </div>
          <p class="violation-description">{{ violation.explanation }}</p>
        </div>

        <!-- Recommendation Section -->
        <div v-if="recommendation" class="analysis-section">
          <h2>Recommendation</h2>
          <p class="recommendation-text">{{ recommendation }}</p>
        </div>

        <!-- Actions Section -->
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
