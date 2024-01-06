<template>
    <li class="plan rounded-md border-2 border-gray-100 h-min flex p-3 gap-4 cursor-pointer">
        <div class="image">
            <img :src="imagePath" :alt="name">
        </div>
        <div class="content flex flex-col">
            <span class="name text-xl font-bold">
                {{ name }}
            </span>
            <span class="price">
                ${{ price }}/m
            </span>
            <span class="discount font-medium">
                {{ discount }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

interface planProps {
    name: string,
    price: number,
    discount: string
}

const imagePath = computed(() => `/src/assets/images/icon-${name.toLowerCase()}.svg`);
const { name, price, discount } = defineProps<planProps>();

onMounted(() => {
    console.log(imagePath.value);
})
</script>

<style scoped>
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