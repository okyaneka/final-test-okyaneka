<script setup lang="ts">
import IMAGE_FEAT_11 from "~/assets/images/feat-11.jpg";
import IMAGE_FEAT_12 from "~/assets/images/feat-12.jpg";
import IMAGE_FEAT_13 from "~/assets/images/feat-13.jpg";
import IMAGE_FEAT_14 from "~/assets/images/feat-14.jpg";

import { Button } from "../../ui/button";
import { FeatureCard1 } from "..";

const sliders = ref<HTMLDivElement[] | null>(null);
const total = ref(3);
const active = ref(1);
const width = ref(0);

const isActive = (index: number) => index == active.value;

onMounted(() => {
  if (Array.isArray(sliders.value) && sliders.value[0]) {
    const el = sliders.value[0];

    width.value = el.clientWidth;
    console.log(el.clientWidth);
  }
});
</script>

<template>
  <section class="container py-10">
    <div class="flex justify-between items-end gap-4 mb-10">
      <div>
        <h1 class="text-3xl mb-2">Incridible Deals</h1>
        <p>
          Select from an array of staycation, dining and attraction promotions.
        </p>
      </div>

      <div>
        <a
          href="#"
          class="py-3 px-4 bg-primary bg-opacity-20 hover:bg-opacity-15"
          >View All Promotions</a
        >
      </div>
    </div>

    <div class="mb-10 relative flex flex-nowrap">
      <div
        ref="sliders"
        v-for="i in total"
        class="grid grid-cols-4 gap-4 w-full flex-none mr-4 transition-all duration-300"
        :style="{
          transform: `translateX(${(-16 - width) * (active - 1)}px)`,
        }"
      >
        <FeatureCard1
          :image="IMAGE_FEAT_11"
          title="Gili Islands Full Day Snorkling"
          description="Embark on a captivating full-day snorkeling experience to the enchanting Gili Islands with the esteemed PADI 5* Center"
        />
        <FeatureCard1
          :image="IMAGE_FEAT_12"
          title="FIM Asian Road Racing Championship"
          description="The Asia Road Racing Championship is the only regional level motorcycle racing series in Asia. It representant the next step for riders graduating from their respective national championships"
        />
        <FeatureCard1
          :image="IMAGE_FEAT_13"
          title="Ultimate Romantic Dinner"
          description="The bliss of being in love is best enjoyed at Tugu Lombok, where every suite is inspired with romantic tales and legends from ancient kingdoms."
        />
        <FeatureCard1
          :image="IMAGE_FEAT_14"
          title="Lombok Golf Kosaido"
          description="The only 18-hole international golf course on Lombok Island is a 6245-meter par 72 championship course designed by Peter Thompson, Michael Wolveridge and Perret. "
        />
      </div>

      <div
        class="absolute w-full left-0 top-1/2 -translate-y-1/2 flex justify-between"
      >
        <Button
          variant="outline"
          size="icon"
          class="relative -left-4 rounded-full"
          @click="active = active == 1 ? total : active - 1"
        >
          <Icon name="ri:arrow-left-s-line" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          class="relative left-4 rounded-full"
          @click="active = active == total ? 1 : active + 1"
        >
          <Icon name="ri:arrow-right-s-line" />
        </Button>
      </div>
    </div>

    <div class="flex gap-1">
      <div
        v-for="i in total"
        class="h-1 w-4 rounded-lg"
        :class="isActive(i) ? 'bg-primary' : 'bg-gray-400'"
      ></div>
    </div>
  </section>
</template>
