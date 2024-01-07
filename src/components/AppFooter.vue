<template>
    <footer class="fixed bottom-0 w-full h-[70px] p-4 flex bg-white justify-end items-center md:static"
        :class="{ 'justify-between': formStore.getCurrentStep > 1 }">
        <button v-if="formStore.getCurrentStep > 1 && formStore.getCurrentStep != 5" @click="handlePreviousStep"
            class="description cursor-pointe font-bold">
            Go back
        </button>
        <button v-if="formStore.getCurrentStep != 5"
            class="next-step rounded-[4px] pt-2 pb-2 pl-3 pr-4 text-white cursor-pointer" @click="handleNextStepClick">
            Next Step
        </button>
    </footer>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'vue-router';
import { routingValidation } from '../utils/routingValidation';

const formStore = useFormStore();
const router = useRouter();

const handleNextStepClick = async (): Promise<void> => {
    switch (formStore.getCurrentStep) {
        case 1: {
            await formStore.validateAndSubmit();
            break;
        }
        case 2: {
            formStore.setCurrentStep(3);
            router.push("/step/3");
            break;
        }
        case 3: {
            formStore.setCurrentStep(4);
            router.push("/step/4");
            break;
        }
        case 4: {
            formStore.setCurrentStep(5);
            router.push("/step/5");
            break;
        }
    }
}

const handlePreviousStep = (): void => {
    const previousStep = formStore.getCurrentStep - 1;
    formStore.setCurrentStep(previousStep);
    router.push(`/step/${previousStep}`)
    routingValidation();
}
</script>

<style scoped>
.next-step {
    background-color: var(--marine-blue);
}
</style>