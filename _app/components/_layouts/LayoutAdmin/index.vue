<script setup lang="ts">
import Navbar from "~/_app/components/_layouts/LayoutAdmin/navbar.vue";
import Sidebar from "~/_app/components/_layouts/LayoutAdmin/sidebar.vue";
const config = useRuntimeConfig();
const appName = config.public.appName;
const props = defineProps({
  title: {
    type: String,
  },
});
useHead({
  title: props?.title || appName || "Template",
});
</script>
<template>
  <div class="layout-admin grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div class="flex flex-col">
      <Navbar />
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
