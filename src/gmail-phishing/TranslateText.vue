<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { translate } from '../utils/translate';

const props = defineProps<{
  text: string
}>();

const translated = ref(props.text);

watchEffect(async () => {
  translated.value = await translate(props.text);
});
</script>

<template>
  {{ translated }}
</template>