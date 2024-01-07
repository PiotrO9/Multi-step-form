<template>
    <nav class="pt-10 md:absolute md:top-0 md:left-[90px]">
        <ul class="list-none flex flex-row justify-center gap-4">
            <AppAsideNavItem v-for="(stepsDescription, index) in stepsDescriptions" :key="stepsDescription"
                :stepNumber="index + 1" :description="stepsDescription" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
import AppAsideNavItem from './AppAsideNavItem.vue';

const stepsDescriptions: string[] = [
    "your info",
    "select plan",
    "add-ons",
    "summary"
]
</script>