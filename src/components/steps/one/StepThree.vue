<template>
    <div class="step step-two">
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

const formStore = useFormStore();

const addons = [{
    name: "Online service",
    description: "Acces to multiplayer games",
    price: 1
},
{
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2
},
{
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2
}]

onMounted(() => {
    formStore.setCurrentStep(3)
})
</script>

<style>
.step {
    background-color: white;
    margin: 40px 20px 0px;
    padding: 30px 20px;
    border-radius: 8px;
    height: max-content;
    position: relative;
}

.heading {
    font-weight: bold;
    font-size: 28px;
}

.description {
    color: gray;
    font-weight: 500;
}
</style>