<template>
    <div class="step step-one">
        <h1 class="heading">Personal info</h1>
        <span class="description">
            Please provide your name, email address, and phone number.
        </span>
        <!-- <input type="text" v-model="email" v-bind="emailAttrs"> -->
        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
            <InputField name="name" type="text" label="Full Name" placeholder="Your Name"
                success-message="Nice to meet you!" />
            <button type="submit">
                submit
            </button>
        </Form>
    </div>
</template>

<script setup lang="ts">
import InputField from "../../common/InputField.vue"
import { Form } from 'vee-validate';
import * as Yup from 'yup';

function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('invalid');
    setTimeout(() => {
        submitBtn.classList.remove('invalid');
    }, 1000);
}

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
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
</style>