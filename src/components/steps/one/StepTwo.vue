<template>
    <div class="step step-two">
        <h1 class="heading">Select your plan</h1>
        <span class="description">
            You have the option of montly or yearly billing.
        </span>
        <ul class="plans flex flex-col gap-3 mt-4">
            <StepTwoPlan v-for="(plan, index) in plansDatas" :key="index" :name="plan.name" :discount="plan.discrount"
                :price="plan.price" @click="selectItem(plan.name)" />
        </ul>
        <div class="switch-container mt-4">
            <div class="flex justify-center gap-4 ">
                <span class="w-16" :class="{ active: !checkboxState }">
                    Monthly
                </span>
                <label class="switch">
                    <input class="checkbox" type="checkbox" v-model="checkboxState">
                    <span class="slider"></span>
                </label>
                <span class="w-16" :class="{ active: checkboxState }">
                    Yearly
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useFormStore } from "@/stores/formStore";
import StepTwoPlan from "./StepTwoPlan.vue";
import { ref, watch } from 'vue';

const plansDatas = [
    {
        name: "Arcade",
        price: 9,
        discrount: "2 months free"
    },
    {
        name: "Advanced",
        price: 12,
        discrount: "2 months free"
    }
    , {
        name: "Pro",
        price: 15,
        discrount: "2 months free"
    }
]

const formStore = useFormStore();
const checkboxState = ref<boolean>(false);
const selectedItem = ref<string>(formStore.getSelectedPlanName);

watch(checkboxState, () => {
    formStore.setPlanPeriod(checkboxState.value);
})

const selectItem = (itemName: string): void => {
    selectedItem.value = itemName;
    formStore.setPlanName(itemName);
}

onMounted(() => {
    formStore.setCurrentStep(2);
});
</script>

<style scoped>
.plans {
    list-style-type: none;
    display: flex;
    flex-direction: column;
}

.active {
    color: var(--marine-blue);
    font-weight: 600;
}

.switch {
    position: relative;
    width: 50px;
}

.switch .checkbox {
    display: none;
}

.switch .checkbox:checked+.slider::before {
    transform: translateX(20px);
}

.switch .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: var(--marine-blue);
    transition: .4s;
    border-radius: 20px;
    width: 45px;
    height: 24px;
}

.switch .slider::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
</style>