<script lang="ts" setup>
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const menus = [
  "Shop",
  "Hotels",
  "Food & Beverage",
  "Events",
  "Attractions",
  "Promotions",
];
</script>

<template>
  <div class="flex justify-between items-center px-10 py-5">
    <a href="#">
      <img class="h-12" src="~/assets/images/logo.png" />
    </a>
    <div class="flex gap-3 items-center">
      <a
        v-for="menu in menus"
        href="#"
        class="transition-all hover:text-primary"
        >{{ menu }}</a
      >
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <Button
        variant="ghost"
        size="icon"
        class="rounded-full relative flex-none"
      >
        <span
          class="absolute top-0 right-0 rounded-full text-white bg-red-500 h-4 w-4 text-[12px]"
          style="line-height: 1.5"
          >2</span
        >
        <Icon name="ri:shopping-cart-line" class="text-lg" />
      </Button>

      <Input placeholder="Search" />

      <div class="flex flex-nowrap">
        <Button
          class="border-primary text-primary bg-primary bg-opacity-40 hover:bg-opacity-20 hover:bg-primary hover:text-primary"
          variant="outline"
          size="xs"
          >ENG</Button
        >
        <Button variant="outline" size="xs">ID</Button>
      </div>
    </div>
  </div>
</template>
