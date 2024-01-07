<template>
    <div class="step step-three">
        <h1 class="heading">Pick add-ons</h1>
        <span class="description">
            Add-ons help enhance your gmaing experience.
        </span>
        <ul class="addons flex flex-col gap-4 mt-4">
            <StepThreeAddon v-for="(addon, index) in addons" :key="index" :name="addon.name"
                :description="addon.description" :price="addon.price" />
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFormStore } from '@/stores/formStore';
import StepThreeAddon from './StepThreeAddon.vue';
import { addons } from "../../../datas/addons";

const formStore = useFormStore();

onMounted(() => {
    formStore.setCurrentStep(3)
})
</script>