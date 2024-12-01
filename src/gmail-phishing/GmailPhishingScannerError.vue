<template>
  <div class="ai-scanner-error">
    <div class="ai-scanner-error-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path
          d="m 9.374502,15.370518 5.52988,-5.7848606 M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z M 14.924303,15.227092 9.3306772,9.6015936"
          id="path2"
        />
      </svg>
    </div>
    <div class="ai-scanner-error-content">
      <div class="ai-scanner-error-title"><t text="Analysis Failed" /></div>
      <div class="ai-scanner-error-message"><t :text="message" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from '../components/TranslateText.vue';

defineProps<{
  message: string
}>()
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
