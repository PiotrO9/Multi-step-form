<template>
  <AppAside />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppAside from "./components/Aside/AppAside.vue";
import AppFooter from "./components/AppFooter.vue";
</script>