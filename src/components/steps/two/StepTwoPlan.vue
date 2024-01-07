<template>
    <li class="plan rounded-md border-2 border-gray-100 h-min flex p-3 gap-4 cursor-pointer"
        :class="{ active: selectedPlan === name }">
        <div class="image">
            <img :src="imagePath" :alt="name">
        </div>
        <div class="content flex flex-col">
            <span class="name text-xl font-bold">
                {{ name }}
            </span>
            <span class="price">
                ${{ planPeriod ? price * 10 : price }}/{{ planPeriod ? 'y' : 'm' }}
            </span>
            <span class="discount font-medium">
                {{ discount }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();

const planPeriod = computed(() => formStore.getPlanPeriod);
const selectedPlan = computed(() => formStore.getSelectedPlanName);

interface planProps {
    name: string,
    price: number,
    discount: string
}

const imagePath = computed(() => `/src/assets/images/icon-${name.toLowerCase()}.svg`);
const { name, price, discount } = defineProps<planProps>();
</script>

<style scoped>
.active {
    background-color: var(--magnolia);
    border-color: var(--purplish-blue);
}

.name {
    color: var(--marine-blue);
}

.price {
    color: gray;
}

.discount {
    color: var(--marine-blue);
}
</style>