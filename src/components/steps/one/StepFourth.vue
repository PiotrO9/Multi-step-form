<template>
    <div class="step step-four">
        <h1 class="heading">Finish up</h1>
        <span class="description">
            Double-check everything looks OK before confirming.
        </span>
        <div class="summary flex flex-col p-3 rounded-lg mt-4">
            <div class="plan flex justify-between">
                <div class="text-content flex flex-col justify-center">
                    <span class="highlighted-text">
                        {{ dataSummary.selectedPlanName }} ({{ dataSummary.isPlanYearly ? 'Yearly' : 'Monthly' }})
                    </span>
                    <span class="change description underline cursor-pointer">
                        Change
                    </span>
                </div>
                <div class="highlighted-text price flex items-center">
                    ${{ dataSummary.isPlanYearly ? (price * 10) : price }}/{{ dataSummary.isPlanYearly ? 'y' : 'mo' }}
                </div>
            </div>
            <hr class="w-[100%] mt-3 mb-3 self-center">
            <ul class="flex flex-col gap-2">
                <li v-for="(selectedAddon, index) in selectedAddons" :key="index" class="flex justify-between">
                    <span class="description">
                        {{ selectedAddon }}
                    </span>
                    <span class="highlighted-text">
                        +${{ findAddonPrice(selectedAddon) }}/{{ dataSummary.isPlanYearly ? 'y' : 'mo' }}
                    </span>
                </li>
            </ul>
        </div>
        <div class="total-price mt-6 flex justify-between pl-2 pr-2">
            <span class="description">
                Total (per {{ dataSummary.isPlanYearly ? 'year' : 'month' }})
            </span>
            <span class="highlighted-text">
                +${{ totalPrice }}/{{ dataSummary.isPlanYearly ? 'y' : 'mo' }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useFormStore } from '@/stores/formStore';
import type { DataSummary } from '@/types/dataSummary';
import { addons } from '@/datas/addons';

const formStore = useFormStore();
const dataSummary = computed<DataSummary>(() => formStore.getDataSummary);
const price = computed<number>(() => {
    const planName = dataSummary.value.selectedPlanName;
    let resultPrice = 0;
    switch (planName) {
        case "Arcade": {
            resultPrice = 9;
            break;
        }
        case "Advanced": {
            resultPrice = 12;
            break;
        }
        case "Pro": {
            resultPrice = 15;
            break;
        }
    }
    return resultPrice;
})
const selectedAddons = computed(() => formStore.getAddons)

const findAddonPrice = (addonName: string): number => {
    return (addons.find((addon) => addon.name === addonName)?.price) ?? 0;
}

const totalPrice = computed<number>(() => {
    let totalSum = 0;
    totalSum += price.value;

    selectedAddons.value.forEach((selectedAddon) => {
        totalSum += findAddonPrice(selectedAddon);
    })

    return totalSum;
})

onMounted(() => {
    formStore.setCurrentStep(4);
})
</script>

<style>
.summary {
    background-color: var(--magnolia);
}

.highlighted-text {
    color: var(--marine-blue);
    font-weight: 800;
}
</style>