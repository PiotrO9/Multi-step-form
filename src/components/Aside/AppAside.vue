<template>
    <aside class="flex-col relative w-full md:max-w-[400px]">
        <img v-if="isMobile" src="../../assets/images/bg-sidebar-mobile.svg" class="w-full absolute top-0 left-0">
        <img v-else src="../../assets/images/bg-sidebar-desktop.svg" class="w-full max-w-[400px]">
        <AppAsideNav />
    </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AppAsideNav from './AppAsideNav.vue';

const isMobile = ref(window.innerWidth < 768);

const updateWidth = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});
</script>