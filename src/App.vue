<template>
  <div
    class="container flex flex-col w-full max-w-[1200px] md:flex-row md:justify-between md:bg-white md:rounded-2xl md:p-4">
    <AppAside />
    <main class="md:flex md:flex-col md:justify-between">
      <router-view></router-view>
      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppAside from "./components/Aside/AppAside.vue";
import AppFooter from "./components/AppFooter.vue";
</script>