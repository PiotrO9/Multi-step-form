<template>
    <li class="addon p-3 flex g-4 border-2 items-center rounded-xl gap-4" :class="{ active: isAddonActive }">
        <div class="state-container flex items-center">
            <input type="checkbox" class="h-5 w-5" v-model="addonState">
        </div>
        <div class="data-container flex items-center gap-4 justify-between w-full">
            <div class="text-datas flex flex-col">
                <span class="name text-md font-bold">
                    {{ name }}
                </span>
                <span class="description text-xs">
                    {{ description }}
                </span>
            </div>
            <span class="price-datas">
                +${{ price }}/{{ planPeriod ? 'y' : 'm' }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useFormStore } from '@/stores/formStore';

interface addonProps {
    name: string,
    description: string,
    price: number
}

const { name, description, price } = defineProps<addonProps>();

const formStore = useFormStore();
const planPeriod = computed(() => formStore.getPlanPeriod);
const isAddonActive = computed(() => {
    return (!!formStore.getAddons.find((addon) => addon == name))
})
const addonState = ref<boolean>(isAddonActive.value);

watch(addonState, () => {
    if (addonState.value) {
        formStore.addAddon(name)
    }
    else {
        formStore.removeAddon(name)
    }
}, {
    immediate: true
})
</script>

<style scoped>
.name {
    color: var(--marine-blue);
}

.active {
    background-color: var(--magnolia);
    border-color: var(--purplish-blue);
}
</style>
