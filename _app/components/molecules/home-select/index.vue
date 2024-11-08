<script setup lang="ts">
const props = defineProps<{ label: string; placeholder: string }>();
</script>

<template>
  <div class="border rounded-lg p-3">
    <h3 class="text-sm font-semibold">{{ label }}</h3>
    <Select class="border-0">
      <SelectTrigger class="flex-nowrap border-0 w-[240px] p-0">
        <SelectValue :placeholder="placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Attractions</SelectLabel>
          <SelectItem value="apple">Attractions</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
