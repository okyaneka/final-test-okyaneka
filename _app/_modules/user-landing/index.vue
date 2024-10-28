<script setup>
import { onMounted } from 'vue';
import { trUc } from '~/_app/helpers/trans';
import { Label } from '~/_app/components/ui/label';
import { Routes } from '~/_app/config/routes';
import Layout from "~/_app/components/_layouts/Layout";

const config = useRuntimeConfig();
const appName = config.public.appName;
const isRedirectSignin = config.public.isRedirectSignin;

onMounted(() => {
  if(isRedirectSignin) {
    window.location.href = Routes.AUTH_SIGNIN;
  }
});

</script>
<template>
  <Layout>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Label>{{ trUc({ $t, key: "helloworld" }) }} {{ appName }}</Label>
    </div>
  </Layout>
</template>
