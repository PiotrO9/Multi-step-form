<template>
    <div class="step step-five flex flex-col items-center justify-center">
        <img src="../../../assets/images/icon-thank-you.svg">
        <h1 class="heading mt-4">Thank you</h1>
        <span class="description text-center text-xl mt-4 mb-4">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com
        </span>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { routingValidation } from '../../../utils/routingValidation';

onMounted(() => {
    routingValidation()
})
</script>