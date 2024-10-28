<script setup lang="ts">
import { CircleUser, Menu, Package2, Search } from "lucide-vue-next";
import { menuAccount, menuSidebar } from '~/_app/components/_layouts/LayoutAdmin/admin-menu';
import { Button } from "~/_app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/_app/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "~/_app/components/ui/dropdown-menu";
import { Input } from "~/_app/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "~/_app/components/ui/sheet";
import { trUc } from "~/_app/helpers/trans";
const config = useRuntimeConfig();
const appName = config.public.appName;
</script>
<template>
  <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="flex flex-col">
        <nav class="grid gap-2 text-lg font-medium">
          <a
            href="/"
            class="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 class="h-6 w-6" />
            <span>{{ appName || 'Template' }}</span>
          </a>
          <template v-for="(item, index) in menuSidebar" :key="index">
            <a
              :href="item.link"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <component :is="item.icon" class="icon-class" />
              {{ trUc({$t, key: item.name, data: {} }) }}
            </a>
          </template>
        </nav>
        <div v-if="false" class="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
    <div class="w-full flex-1">
      <form>
        <div class="relative">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <template v-for="(item, index) in menuAccount" :key="index">
          <DropdownMenuSeparator v-if="item.separator" />
          <DropdownMenuItem v-else>{{ trUc({$t, key: item.name ?? '', data: {} }) }}</DropdownMenuItem>
        </template>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>