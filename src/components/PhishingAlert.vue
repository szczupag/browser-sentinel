<template>
    <div v-if="isVisible" class="phishing-alert-overlay" @click.self="handleOverlayClick">
      <div class="phishing-alert-container">
        <div class="phishing-alert-header">
          <div class="phishing-alert-header-content">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Security Alert: Potential Phishing Attempt
          </div>
        </div>
        <div class="phishing-alert-content">
          <div class="phishing-risk-section">
            <div class="phishing-risk-item">
              <span class="phishing-risk-label">Risk Level:</span>
              <div class="phishing-risk-badge" :class="riskLevelClass">
                {{ overallRiskScore }}
              </div>
            </div>
            <div class="phishing-risk-item">
              <span class="phishing-risk-label">Confidence:</span>
              <div class="phishing-risk-badge" :class="confidenceLevelClass">
                {{ overallConfidence }}
              </div>
            </div>
          </div>
          
          <p><b>Detected Security Risks:</b></p>
          <div class="phishing-rules">
            <div class="phishing-rules-list">
              <div 
                v-for="violation in violations" 
                :key="violation.rule"
                class="phishing-rule-item"
              >
                <div class="phishing-rule-header">
                  <span class="phishing-rule-name">{{ violation.rule }}</span>
                  <span class="phishing-severity-badge" :class="getSeverityClass(violation.severity)">
                    {{ violation.severity }}
                  </span>
                </div>
                <div class="phishing-rule-description">{{ violation.explanation }}</div>
              </div>
            </div>
          </div>

          <div class="phishing-summary" v-html="formattedRecommendation"></div>

          <div class="phishing-actions">
            <button 
              class="phishing-btn phishing-btn-back" 
              @click="handleBack"
            >
              Leave Site
            </button>
            <button 
              class="phishing-btn phishing-btn-proceed" 
              @click="handleProceed"
            >
              Proceed Anyway
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
//import MarkdownIt from 'markdown-it';

//const md = new MarkdownIt();

const isVisible = ref(true);

const props = defineProps({
  violations: {
    type: Array,
    required: true
  },
  overallRiskScore: {
    type: String,
    required: true
  },
  overallConfidence: {
    type: String,
    required: true
  },
  isSafe: {
    type: Boolean,
    required: true
  },
  recommendation: {
    type: String,
    required: true
  }
});

const confidencePercent = computed(() => {
  return (props.confidence * 100).toFixed(0);
});

const handleBack = () => {
  isVisible.value = false;
  location.href = 'https://www.google.com';
};

const handleProceed = () => {
  isVisible.value = false;
};

const formattedRecommendation = computed(() => {
  //return md.render(props.recommendation);
  return props.recommendation;
});

const riskLevelClass = computed(() => {
  return `risk-${props.overallRiskScore.toLowerCase()}`;
});

const confidenceLevelClass = computed(() => {
  return `confidence-${props.overallConfidence.toLowerCase()}`;
});

const getSeverityClass = (severity) => {
  return `severity-${severity.toLowerCase()}`;
};
</script>
