<template>
  <div class="ai-scanner-error">
    <div class="ai-scanner-error-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="ai-scanner-error-content">
      <div class="ai-scanner-error-title"><t text="Analysis Failed" /></div>
      <div class="ai-scanner-error-message"><t :text="message" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from './TranslateText.vue';

defineProps<{
  message: string;
}>();
</script>
<style scoped>
.ai-scanner-error {
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #5f6368;
  border: 1px solid #dadce0;
}

.ai-scanner-error-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: #d93025;
}

.ai-scanner-error-content {
  flex: 1;
}

.ai-scanner-error-title {
  font-weight: 500;
  color: #d93025;
  margin-bottom: 2px;
}

.ai-scanner-error-message {
  font-size: 13px;
}
</style>