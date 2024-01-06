<template>
    <footer class="fixed bottom-0 w-full h-[70px] p-4 flex justify-between items-center">
        <button v-if="formStore.getCurrentStep > 1" class="cursor-pointer text-gray-100 font-medium">
            Go back
        </button>
        <button class="rounded-[4px] pt-2 pb-2 pl-3 pr-4 text-white cursor-pointer" @click="handleNextStepClick">
            Next Step
        </button>
    </footer>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

const handleNextStepClick = async (): Promise<void> => {
    switch (formStore.getCurrentStep) {
        case 1: {
            await formStore.validateAndSubmit();
            break;
        }
        case 2: {
            router.push("/step/3");
            break;
        }
        case 3: {
            router.push("/step/4");
            break;
        }
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