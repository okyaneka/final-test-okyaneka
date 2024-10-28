<script setup lang="ts">
import LayoutAdmin from "~/_app/components/_layouts/LayoutAdmin/index.vue";
import { trFirst, trUc } from "~/_app/helpers/trans";
</script>
<template>
  <LayoutAdmin>
    <div class="flex items-center">
      <h1 class="text-lg font-semibold md:text-2xl">
        {{ trUc({ $t, key: "components", data: {} }) }}
      </h1>
    </div>
    <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div class="flex flex-col items-center gap-1 text-center">
        <h3 class="text-2xl font-bold tracking-tight">
          {{ trUc({ $t, key: "components", data: {} }) }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ trFirst({ $t, key: "youCanStart", data: {} }) }}
        </p>
      </div>
    </div>
  </LayoutAdmin>
</template>
