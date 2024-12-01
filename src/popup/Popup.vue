<template>
  <div class="popup" role="main">
    <div class="popup-header">
      <div class="popup-header-content">
        <!-- Danger Icon -->
        <div
          class="icon-container severity-high"
          v-if="
            store.domainAnalysis?.isSuspicious ||
            (store.status === AnalysisStatus.ANALYSIS_FINISHED &&
              store.contentAnalysis?.overallRiskScore !== 'LOW')
          "
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="m 9.374502,15.370518 5.52988,-5.7848606 M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z M 14.924303,15.227092 9.3306772,9.6015936"
              id="path2"
            />
          </svg>
        </div>
        <!-- Default Icon -->
        <div
          class="icon-container"
          v-else-if="
            store.status === AnalysisStatus.STARTING_DOMAIN_ANALYSIS ||
            store.status === AnalysisStatus.STARTING_CONTENT_ANALYSIS
          "
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z"
              id="path2"
            />
          </svg>
        </div>
        <!-- Safe Icon -->
        <div class="icon-container severity-low" v-else>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h1>Browser Sentinel</h1>
      </div>
    </div>

    <!-- Analysis Status -->
    <div
      v-if="store.status === AnalysisStatus.STARTING_DOMAIN_ANALYSIS"
      :class="['analysis-section', 'loading']"
    >
      <div class="status-indicator">
        <div class="loading-spinner"></div>
        <span>Starting security analysis...</span>
      </div>
    </div>

    <!-- Domain Analysis -->
    <div
      v-if="
        store.status === AnalysisStatus.STARTING_CONTENT_ANALYSIS ||
        store.status === AnalysisStatus.ANALYSIS_FINISHED
      "
      :class="['analysis-section', domainStatusClass]"
    >
      <h2>Domain Analysis</h2>
      <div class="result">
        <h3>Status</h3>
        <span>{{ domainStatus.toUpperCase() }}</span>
      </div>
      <div class="result" v-if="store.domainAnalysis?.legitimateDomain">
        <h3>Similar to</h3>
        <span>{{ store.domainAnalysis.legitimateDomain }}</span>
      </div>
    </div>

    <!-- Content Analysis Loading -->
    <div
      v-if="store.status === AnalysisStatus.STARTING_CONTENT_ANALYSIS"
      :class="['analysis-section', 'loading']"
    >
      <div class="status-indicator">
        <div class="loading-spinner"></div>
        <span>Analyzing page content...</span>
      </div>
    </div>

    <!-- Content Analysis Results -->
    <div
      v-if="store.status === AnalysisStatus.ANALYSIS_FINISHED"
      :class="['analysis-section', contentRiskClass]"
    >
      <h2>Content Analysis</h2>
      <div class="result">
        <h3>Risk Level</h3>
        <span>{{ store.contentAnalysis?.overallRiskScore || 'Not analyzed' }}</span>
      </div>
      <div class="result">
        <h3>Confidence</h3>
        <span>{{ store.contentAnalysis?.overallConfidence || 'N/A' }}</span>
      </div>
    </div>

    <!-- Preferences -->
    <div class="settings-section">
      <h2>Preferences</h2>
      <div class="settings-group">
        <div class="setting-item">
          <div class="setting-info">
            <label for="display-warnings-setting">Display Domain Warnings</label>
            <span class="setting-description">
              Get alerts for potentially malicious or suspicious domains while browsing.
            </span>
          </div>
          <label class="toggle">
            <input
              id="display-warnings-setting"
              type="checkbox"
              :checked="store.displaySuspiciousDomainAlerts"
              @change="store.toggleSuspiciousDomainAlerts()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <label for="highlight-ugc-setting">Highlight UGC Threats</label>
            <span class="setting-description">
              Identify and flag risky user-generated content such as comments or messages.
            </span>
          </div>
          <label class="toggle">
            <input
              id="highlight-ugc-setting"
              type="checkbox"
              :checked="store.highlightSuspiciousUGC"
              @change="store.toggleSuspiciousUGC()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <label for="highlight-email-setting">Display Email Analysis</label>
            <span class="setting-description">
              Scan emails to detect and highlight potential threats or phishing attempts.
            </span>
          </div>
          <label class="toggle">
            <input
              id="highlight-email-setting"
              type="checkbox"
              :checked="store.highlightSuspiciousEmailContent"
              @change="store.toggleSuspiciousEmailContent()"
            />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store'
import { computed, onMounted } from 'vue'
import { AnalysisStatus } from '../constants/analysisStatus'

const store = useMainStore()

onMounted(async () => {
  await store.initialize()
})

const domainStatus = computed(() => {
  if (!store.domainAnalysis) return 'Not analyzed'
  return store.domainAnalysis.isSuspicious ? 'Suspicious' : 'Safe'
})

const domainStatusClass = computed(() => {
  if (!store.domainAnalysis) return 'severity-low'
  return `severity-${store.domainAnalysis.isSuspicious ? 'high' : 'low'}`
})

const contentRiskClass = computed(() => {
  if (!store.contentAnalysis?.overallRiskScore) return 'severity-low'
  return `severity-${store.contentAnalysis.overallRiskScore.toLowerCase()}`
})
</script>

<style>
/* Base Styles */
body {
  margin: 0;
}

.popup {
  width: 350px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #1f2937;
  background: #ffffff;
}

/* Header Styles */
.popup-header {
  color: #1f2937;
  margin-bottom: 30px;
}

.popup-header-content {
  display: flex;
  align-items: center;
}

.popup-header-content h1 {
  margin: 0;
}

/* Typography */
h2 {
  color: #374151;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

h3 {
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}

/* Analysis Sections */
.analysis-section {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.result {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.result span {
  margin: 0;
  font-weight: 600;
}

/* Settings Section */
.settings-section {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.setting-info {
  flex: 1;
}

.setting-info label {
  font-size: 14px;
  display: block;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 2px;
}

.setting-description {
  font-size: 12px;
  color: #4b5563;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #e2e8f0;
  transition: 0.3s;
  border-radius: 20px;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #b29bd4;
}

input:checked + .toggle-slider:before {
  transform: translateX(16px);
}

input:focus + .toggle-slider {
  box-shadow: 0 0 1px #94a3b8;
}

/* Loading States */
.status-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #4b5563;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Severity Indicators */
.severity-high {
  background: rgba(220, 38, 38, 0.2);
  color: #dc2626;
}

.severity-medium {
  background: rgba(234, 88, 12, 0.2);
  color: #ea580c;
}

.severity-low {
  background: rgba(22, 163, 74, 0.2);
  color: #16a34a;
}

/* Dark Mode Styles */
@media (prefers-color-scheme: dark) {
  .popup {
    background: #1a1b1e;
    color: #f3f4f6;
  }

  .popup-header {
    color: #f3f4f6;
  }

  h2,
  h3 {
    color: #f3f4f6;
  }

  .analysis-section {
    background: #1a1b1e;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .settings-section {
    background: #1f2937;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .setting-info label {
    color: #f3f4f6;
  }

  .setting-description {
    color: #9ca3af;
  }

  .toggle-slider {
    background-color: #6b7280;
  }

  input:checked + .toggle-slider {
    background-color: #7655a8;
  }

  .toggle-slider:before {
    background-color: #f3f4f6;
  }

  .status-indicator {
    color: #9ca3af;
  }

  .loading-spinner {
    border-color: #374151;
    border-top-color: #6366f1;
  }

  /* Dark mode severity indicators */
  .severity-high {
    background: rgba(220, 38, 38, 0.15);
    color: #ef4444;
  }

  .severity-medium {
    background: rgba(234, 88, 12, 0.15);
    color: #fb923c;
  }

  .severity-low {
    background: rgba(22, 163, 74, 0.15);
    color: #4ade80;
  }
}

/* Icon Styles */
.icon-container {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container svg {
  width: 24px;
  height: 24px;
}

.icon-container.severity-high {
  background: transparent;
}

.icon-container.severity-high svg {
  stroke: #dc2626;
}

.icon-container.severity-medium {
  background: transparent;
}

.icon-container.severity-medium svg {
  stroke: #ea580c;
}

.icon-container.severity-low {
  background: transparent;
}

.icon-container.severity-low svg {
  stroke: #16a34a;
}
</style>
