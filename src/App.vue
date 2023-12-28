<template>
  <main>
    <AppAside />
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import AppAside from "./components/AppAside.vue";
</script>