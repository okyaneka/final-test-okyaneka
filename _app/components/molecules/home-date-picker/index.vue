<script setup lang="ts">
const props = defineProps<{ label: string; placeholder: string }>();
</script>

<template>
  <div class="border rounded-lg p-3">
    <h3 class="text-sm font-semibold">{{ label }}</h3>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          class="w-[280px] justify-start text-left font-normal p-0"
        >
          <Icon class="mr-2" name="ri:calendar-2-line" />
          <span> Select Date </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected="{date}"
          onSelect="{setDate}"
          initialFocus
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
