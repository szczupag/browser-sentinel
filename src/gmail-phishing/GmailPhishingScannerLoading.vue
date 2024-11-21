<script setup lang="ts">
import { default as t } from './TranslateText.vue';
</script>

<template>
  <div class="ai-scanner-loading">
    <div class="ai-scanner-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    </div>
    <div class="ai-scanner-progress">
      <div class="ai-scanner-bar"></div>
    </div>
    <span class="ai-scanner-label"><t text="Analyzing message..." /></span>
  </div>
</template>

<style scoped>
.ai-scanner-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 8px 16px;
}

.ai-scanner-icon {
  position: relative;
  width: 16px;
  height: 16px;
}

.ai-scanner-icon svg {
  width: 16px;
  height: 16px;
  color: #1a73e8;
}

.ai-scanner-progress {
  flex: 1;
  height: 2px;
  background: #e8eaed;
  border-radius: 2px;
  overflow: hidden;
}

.ai-scanner-bar {
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #1a73e8 50%, transparent);
  animation: progress-bar 2s ease-in-out infinite;
}

.ai-scanner-label {
  color: #5f6368;
  font-size: 13px;
}

@keyframes progress-bar {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(200%); }
  100% { transform: translateX(-100%); }
}
</style>