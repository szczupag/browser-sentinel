<template>
  <div class="ai-scanner-warning">
    <div class="ai-scanner-warning-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path
          d="m 9.374502,15.370518 5.52988,-5.7848606 M 20.618,5.984 C 17.456104,6.1519152 14.356734,5.0586125 12,2.944 9.6432656,5.0586125 6.5438962,6.1519152 3.382,5.984 3.1275331,6.9691141 2.9991734,7.982551 3,9 3,14.591 6.824,19.29 12,20.622 17.176,19.29 21,14.592 21,9 21,7.958 20.867,6.948 20.618,5.984 Z M 14.924303,15.227092 9.3306772,9.6015936"
          id="path2"
        />
      </svg>
    </div>
    <div>
      <strong><t text="High-Risk Email Detected" /></strong>
      <div><t text="Multiple suspicious elements found in this message" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { default as t } from './TranslateText.vue'
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
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
