<template>
  <div class="popup" role="main">
    <h1>🛡️ Shield</h1>
    <div class="settings">
      <label for="display-warnings-setting" class="setting-label">Display warnings</label>
      <input
        id="display-warnings-setting"
        type="checkbox"
        :checked="store.displayWarnings"
        @change="store.toggleDisplayWarnings"
        aria-describedby="display-warnings-settings-status"
      />
    </div>
    <p id="display-warnings-settings-status" class="status" aria-live="polite">
      Warnings are currently {{ store.displayWarnings ? 'enabled' : 'disabled' }}.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store'
import { onMounted } from 'vue'

const store = useMainStore()

onMounted(() => {
  store.loadSettings()
})
</script>

<style scoped>
.popup {
  width: 300px;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.setting-label {
  display: flex;
  align-items: center;
}

.status {
  font-style: italic;
  color: #666;
}
</style>
