<template>
  <div v-if="isVisible" class="phishing-alert-overlay" @click.self="handleOverlayClick">
    <div class="phishing-alert-container">
      <!-- Header Section -->
      <div class="phishing-alert-header">
        <div class="phishing-alert-header-content">
          <div class="icon-container" :class="severityClass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="m 9.374502,15.370518 5.52988,-5.7848606 M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z M 14.924303,15.227092 9.3306772,9.6015936"
                id="path2"
              />
            </svg>
          </div>
          <span><t :text="title" /></span>
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
          <h2><t text="Risk Analysis" /></h2>
          <div class="result">
            <h3><t text="Risk Level" /></h3>
            <span><t :text="overallRiskScore" /></span>
          </div>
          <div class="result">
            <h3><t text="Confidence" /></h3>
            <span><t :text="overallConfidence" /></span>
          </div>
        </div>

        <!-- Violations Section -->
        <h2><t text="Security Risks" /></h2>
        <div
          v-for="violation in violations"
          :key="violation.rule"
          class="analysis-section"
          :class="['severity-' + violation.severity.toLowerCase()]"
        >
          <div class="violation-header">
            <h3 class="violation-name"><t :text="violation.rule" /></h3>
            <span><t :text="violation.severity" /></span>
          </div>
          <p class="violation-description"><t :text="violation.explanation" /></p>
        </div>

        <!-- Recommendation Section -->
        <div v-if="recommendation" class="analysis-section">
          <h2><t text="Recommendation" /></h2>
          <p class="recommendation-text"><t :text="recommendation" /></p>
        </div>

        <!-- Actions Section -->
        <div class="phishing-actions">
          <button class="phishing-btn phishing-btn-back" @click="handleBack"><t text="Leave Site" /></button>
          <button class="phishing-btn phishing-btn-proceed" @click="handleProceed"><t text="Proceed Anyway" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as t } from './TranslateText.vue';
import { ref, computed } from 'vue'

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

const isHighRisk = computed(() => props.overallRiskScore === 'HIGH')
const isMediumRisk = computed(() => props.overallRiskScore === 'MEDIUM')

const severityClass = computed(() => {
  switch (props.overallRiskScore) {
    case 'HIGH':
      return 'severity-high'
    case 'MEDIUM':
      return 'severity-medium'
    default:
      return 'severity-low'
  }
})

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
