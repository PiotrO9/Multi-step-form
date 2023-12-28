<template>
    <div class="step step-one">
        <h1 class="heading">Personal info</h1>
        <span class="description">
            Please provide your name, email address, and phone number.
        </span>
        <input type="text" v-model="email" v-bind="emailAttrs">
        <Form @submit="onSubmit">
            <Field name="email">

            </Field>
        </Form>
    </div>
</template>

<script setup lang="ts">
import InputField from "../../common/InputField.vue"
import { useForm, Form, Field } from 'vee-validate';

const { handleSubmit, defineField } = useForm();

defineField('email', {
    initialValue: '',
    validation: 'required|email'
});

function onSubmit(values) {
    console.log('Form Values:', values);
    // Handle form submission here
}
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