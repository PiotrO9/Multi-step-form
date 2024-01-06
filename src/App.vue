<template>
  <main>
    <AppAside />
    <router-view></router-view>
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppAside from "./components/AppAside.vue";
import AppFooter from "./components/AppFooter.vue";
</script>