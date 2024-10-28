<script setup lang="ts">
import { Label } from '~/_app/components/ui/label';
import { trFirst, trUc } from '~/_app/helpers/trans';
import { Button } from '~/_app/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/_app/components/ui/card';
import { Input } from '~/_app/components/ui/input';
import Layout from "~/_app/components/_layouts/Layout/index.vue";
</script>
<template>
  <Layout>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="text-2xl">
            {{ trFirst({ $t, key: "login", data: {} }) }}
          </CardTitle>
          <CardDescription>
            {{ trFirst({ $t, key: "enter,your,email,below,to,login,to,your,account", data: {} }) }}
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">
              {{ trFirst({ $t, key: "email", data: {} }) }}
            </Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">
              {{ trFirst({ $t, key: "password", data: {} }) }}
            </Label>
            <Input id="password" type="password" required placeholder="******" />
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full">
            {{ trUc({ $t, key: "signin", data: {} }) }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </Layout>
</template>
