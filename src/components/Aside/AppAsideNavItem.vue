<template>
    <li class="cursor-pointer z-[1] flex gap-6 items-center flex-row">
        <div class="rounded-full border-2 text-white border-white font-bold w-[40px] h-[40px] flex justify-center items-center"
            :class="{ active: currentStep === stepNumber }">
            {{ stepNumber }}
        </div>
        <div class="flex flex-col ">
            <span class="description ">
                STEP {{ stepNumber }}
            </span>
            <span class="none md:flex uppercase text-white font-bold">
                {{ description }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { computed } from 'vue';

const formStore = useFormStore();
const currentStep = computed(() => formStore.getCurrentStep);

interface navItemProps {
    description: string
    stepNumber: number
}

const { description, stepNumber } = defineProps<navItemProps>();
</script>

<style scoped>
.active {
    background-color: white;
    border-radius: 50%;
    color: var(--marine-blue);
}
</style>