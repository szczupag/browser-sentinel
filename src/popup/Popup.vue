<template>
  <div class="popup" role="main">
    <div class="popup-header">
      <div class="popup-header-content">
        <h1>Browser Sentinel</h1>
      </div>
    </div>

    <div class="analysis-section">
      <h2>Domain Analysis</h2>
      <div class="risk-badge">
        <span class="risk-badge-label">Status</span>
        <span class="risk-badge-value" :class="domainStatusClass">
          {{ domainStatus }}
        </span>
      </div>
      <p v-if="store.domainAnalysis?.legitimateDomain" class="analysis-detail">
        Similar to: {{ store.domainAnalysis.legitimateDomain }}
      </p>
    </div>

    <div class="analysis-section">
      <h2>Content Analysis</h2>
      <div class="risk-section">
        <div class="risk-badge">
          <span class="risk-badge-label">Risk Level</span>
          <span class="risk-badge-value" :class="contentRiskClass">
            {{ store.contentAnalysis?.overallRiskScore || 'Not analyzed' }}
          </span>
        </div>
        <div class="risk-badge">
          <span class="risk-badge-label">Confidence</span>
          <span class="risk-badge-value" :class="confidenceClass">
            {{ store.contentAnalysis?.overallConfidence || 'N/A' }}
          </span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>Preferences</h2>
      <div class="settings-group">
        <div class="setting-item">
          <div class="setting-info">
            <label for="display-warnings-setting">Display warnings</label>
            <span class="setting-description">Show alerts for suspicious content</span>
          </div>
          <label class="toggle">
            <input
              id="display-warnings-setting"
              type="checkbox"
              :checked="store.displayWarnings"
              @change="store.toggleDisplayWarnings"
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
import { computed } from 'vue'

const store = useMainStore()

const domainStatus = computed(() => {
  if (!store.domainAnalysis) return 'Not analyzed'
  return store.domainAnalysis.isSuspicious ? 'Suspicious' : 'Safe'
})

const domainStatusClass = computed(() => {
  if (!store.domainAnalysis) return ''
  return `severity-${store.domainAnalysis.isSuspicious ? 'high' : 'low'}`
})

const contentRiskClass = computed(() => {
  if (!store.contentAnalysis?.overallRiskScore) return ''
  return `severity-${store.contentAnalysis.overallRiskScore.toLowerCase()}`
})

const confidenceClass = computed(() => {
  if (!store.contentAnalysis?.overallConfidence) return ''
  return `severity-${store.contentAnalysis.overallConfidence.toLowerCase()}`
})
</script>

<style>
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

.popup-header {
  background: #1f2937;
  color: white;
  padding: 16px 20px;
  margin: -20px -20px 24px -20px;
}

.popup-header-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.popup-header h1 {
  font-size: 18px;
  margin: 0;
  font-weight: 600;
}

.settings-section {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

h2 {
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
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
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 2px;
}

.setting-description {
  font-size: 12px;
  color: #6b7280;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  transition: 0.2s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.2s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #6366f1;
}

input:checked + .toggle-slider:before {
  transform: translateX(20px);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .popup-header {
    background: #111827;
  }

  .settings-section {
    background: #1f2937;
    border-color: rgba(255, 255, 255, 0.1);
  }

  h2 {
    color: #f3f4f6;
  }

  .setting-info label {
    color: #f3f4f6;
  }

  .setting-description {
    color: #9ca3af;
  }

  .toggle-slider {
    background-color: #374151;
  }

  .toggle-slider:before {
    background-color: #d1d5db;
  }

  input:checked + .toggle-slider {
    background-color: #6366f1;
  }
}

.analysis-section {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.risk-section {
  display: flex;
  gap: 16px;
}

.risk-badge {
  flex: 1;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
}

.risk-badge-label {
  display: block;
  color: #4b5563;
  font-size: 13px;
  margin-bottom: 4px;
}

.risk-badge-value {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
}

.severity-high {
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
}

.severity-medium {
  background: rgba(234, 88, 12, 0.1);
  color: #ea580c;
}

.severity-low {
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
}

.analysis-detail {
  margin: 12px 0 0 0;
  font-size: 13px;
  color: #4b5563;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .popup {
    background: #1a1b1e;
    color: #f3f4f6;
  }

  .popup-header {
    color: #1f2937;
    background: white;
  }

  h2 {
    color: #f3f4f6;
  }

  .analysis-section,
  .risk-badge {
    background: #1a1b1e;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .risk-badge-label {
    color: #9ca3af;
  }

  .analysis-detail {
    color: #9ca3af;
  }
}
</style>
