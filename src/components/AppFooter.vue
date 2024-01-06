<template>
    <footer class="fixed bottom-0 w-full h-[70px] p-4 flex justify-end items-center">
        <button class="rounded-[4px] pt-2 pb-2 pl-3 pr-4 text-white cursor-pointer" @click="handleNextStepClick">
            Next Step
        </button>
    </footer>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();

const handleNextStepClick = async (): Promise<void> => {
    const result = await formStore.validateAndSubmit();
    if (result) {
        console.log("Form submitted successfully");
    } else {
        console.log("Form validation failed");
    }
}
</script>

<style scoped>
footer {
    background-color: white;
}

button {
    background-color: var(--marine-blue);
}
</style>