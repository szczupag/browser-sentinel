<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const tooltip = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const content = ref({
  level: '',
  reason: '',
  displayUrl: '',
  actualUrl: ''
});

const position = ref({ top: 0, left: 0 });

const showTooltip = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.classList.contains('ai-sentinel-highlight')) return;

  content.value = {
    level: target.dataset.level || '',
    reason: target.dataset.reason || '',
    displayUrl: target.dataset.displayUrl || '',
    actualUrl: target.dataset.actualUrl || ''
  };

  const rect = target.getBoundingClientRect();
  position.value = {
    top: rect.top - (tooltip.value?.offsetHeight || 0) - 8,
    left: rect.left
  };

  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};

onMounted(() => {
  document.addEventListener('mouseover', showTooltip);
  document.addEventListener('mouseout', hideTooltip);
});

onUnmounted(() => {
  document.removeEventListener('mouseover', showTooltip);
  document.removeEventListener('mouseout', hideTooltip);
});
</script>

<template>
  <div 
    v-show="isVisible"
    ref="tooltip"
    class="ai-sentinel-tooltip"
    :style="{
      top: `${position.top}px`,
      left: `${position.left}px`
    }"
  >
    <div class="tooltip-level">{{ content.level }}</div>
    <div class="tooltip-reason">{{ content.reason }}</div>
    <template v-if="content.displayUrl">
      <div class="tooltip-url-info">
        <div>Display URL: {{ content.displayUrl }}</div>
        <div>Actual URL: {{ content.actualUrl }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.ai-sentinel-tooltip {
  position: fixed;
  z-index: 10000;
  background: #1a1a1a;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
  max-width: 300px;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.ai-sentinel-tooltip::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #1a1a1a;
}

.tooltip-level {
  font-weight: 600;
  margin-bottom: 4px;
}

.tooltip-reason {
  opacity: 0.9;
  margin-bottom: 4px;
}

.tooltip-url-info {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 12px;
  opacity: 0.8;
}
</style>