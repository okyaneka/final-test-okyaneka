<script setup lang="ts">
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip";

defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="p-2 rounded-lg">
    <img class="rounded-lg block aspect-[16/9] mb-2" :src="image" />

    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <h3 class="text-xl text-left line-clamp-1">{{ title }}</h3>
          </TooltipTrigger>
          <TooltipContent>
            <span>{{ title }}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p class="line-clamp-2">{{ description }}</p>
    </div>
  </div>
</template>
