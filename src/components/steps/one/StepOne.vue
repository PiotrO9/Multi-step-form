<template>
    <div class="step step-one">
        <h1 class="heading">Personal info</h1>
        <span class="description">
            Please provide your name, email address, and phone number.
        </span>
    </div>
</template>

<script setup lang="ts">
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
</style>