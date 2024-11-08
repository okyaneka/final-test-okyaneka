<script setup lang="ts">
import {
  Header,
  HomeDatePicker,
  HomeSelect,
} from "~/_app/components/molecules";
import { Button } from "~/_app/components/ui/button";
</script>

<template>
  <Header />
  <section class="relative">
    <img
      class="h-[480px] w-full object-cover"
      src="~/assets/images/main-img-1.jpg"
    />
    <div
      class="absolute left-1/2 -bottom-16 -translate-x-1/2 flex max-w-full p-5 gap-4 items-stretch bg-white rounded-lg shadow"
    >
      <HomeSelect label="SELECT BOOKING TYPE" placeholder="Attractions" />
      <HomeSelect label="ATTRACTIONS" placeholder="Select Attractions" />
      <HomeDatePicker label="VISITING DATE" placeholder="Attractions" />

      <div>
        <Button class="h-full block text-black">Book Now</Button>
      </div>
    </div>
  </section>

  <!-- spacer -->
  <div class="mt-16"></div>
</template>
