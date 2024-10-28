<script setup>
import { Bell, Package2 } from 'lucide-vue-next';
import { menuSidebar } from '~/_app/components/_layouts/LayoutAdmin/admin-menu';
import { Button } from '~/_app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/_app/components/ui/card';
import { trUc } from '~/_app/helpers/trans';
const config = useRuntimeConfig();
const appName = config.public.appName;
</script>
<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <Package2 class="h-6 w-6" />
          <span class="">{{ appName || 'Template' }}</span>
        </a>
        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <a
            v-for="(item, index) in menuSidebar"
            :key="index"
            :href="item.link"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <component :is="item.icon" class="icon-class" />
            {{ trUc({$t, key: item.name }) }}
          </a>
        </nav>
      </div>
      <div v-if="false" class="mt-auto p-4">
        <Card>
          <CardHeader class="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </CardDescription>
          </CardHeader>
          <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" class="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>