<template>
  <div class="ai-scanner-warning">
    <div class="ai-scanner-warning-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    </div>
    <div>
      <strong><t text="High-Risk Email Detected" /></strong>
      <div><t text="Multiple suspicious elements found in this message" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from '../components/TranslateText.vue';
</script>
<style scoped>
.ai-scanner-warning {
  background: #c5221f;
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.ai-scanner-warning-icon {
  display: flex;
}

.ai-scanner-warning-icon svg {
  width: 20px;
  height: 20px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>