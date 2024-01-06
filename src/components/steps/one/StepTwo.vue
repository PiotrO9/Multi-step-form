<template>
    <div class="step step-two">
        <h1 class="heading">Select your plan</h1>
        <span class="description">
            You have the option of montly or yearly billing.
        </span>
        <ul class="plans flex flex-col gap-3">
            <StepTwoPlan v-for="(plan, index) in plansDatas" :key="index" :name="plan.name" :discount="plan.discrount"
                :price="plan.price" />
        </ul>
        <div class="switch-container">
            <div class="flex justify-center gap-4">
                <span :class="{ active: paidPeriod === 'Monthly' }">
                    Monthly
                </span>
                <div class="switch">
                    // TODO switch
                </div>
                <span :class="{ active: paidPeriod === 'Yearly' }">
                    Yearly
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useFormStore } from "@/stores/formStore";
import InputField from "../../common/InputField.vue";
import StepTwoPlan from "./StepTwoPlan.vue";
import { ref } from 'vue';

const formStore = useFormStore();
const paidPeriod = ref<string>("Monthly");

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

onMounted(() => {
    formStore.setCurrentStep(2);
});
</script>

<style scoped>
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

.plans {
    list-style-type: none;
    display: flex;
    flex-direction: column;
}

.active {
    color: var(--marine-blue);
    font-weight: 600;
}
</style>