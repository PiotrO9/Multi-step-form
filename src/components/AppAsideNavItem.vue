<template>
    <li class="cursor-pointer z-[1]">
        <div
            class="rounded-full border-2 text-white border-white font-bold rounded-full w-[40px] h-[40px] flex justify-center items-center">
            {{ stepNumber }}
        </div>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface navItemProps {
    description: string
    stepNumber: number
}

const { description, stepNumber } = defineProps<navItemProps>();
</script>