<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
useHead({
  title: props?.title || "My App",
});
</script>
<template>
  <div class="layout">
    <slot />
  </div>
</template>
