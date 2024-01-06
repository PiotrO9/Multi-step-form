<template>
    <div class="TextInput" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
        <label :for="name">
            {{ label }}
        </label>
        <input :name="name" :id="name" :type="type" :value="inputValue" :placeholder="placeholder" @input="handleChange"
            @blur="handleBlur" />
        <p class="error" v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { defineProps, toRef } from 'vue';

const props = defineProps({
    type: String,
    value: String,
    name: String,
    label: String,
    placeholder: String
});

const name = toRef<string>(props.name ?? "");

const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
} = useField(name, undefined, {
    initialValue: props.value,
});

</script>

<style scoped>
.error {
    color: red;
}

label {
    color: var(--marine-blue);
    font-weight: 600;
}

input {
    width: 100%;
    border: 2px solid var(--light-gray);
    border-radius: 5px;
    padding: 8px 10px;
}

input::placeholder {
    color: var(--cool-gray);
    font-weight: 600;
}
</style>