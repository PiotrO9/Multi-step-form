<template>
    <div class="step step-one">
        <h1 class="heading">Personal info</h1>
        <span class="description">
            Please provide your name, email address, and phone number.
        </span>
        <Form id="stepOne" ref="form" @submit.prevent="onSubmit" :validation-schema="schema"
            @invalid-submit="onInvalidSubmit" class="flex flex-col gap-2">
            <InputField name="name" type="text" label="Name" placeholder="e.g. Stephen King" />
            <InputField name="email" type="text" label="Email Address" placeholder="e.g. stephenking@lorem.com" />
            <InputField name="phone" type="phone" label="Phone Number" placeholder="e.g. +1 234567890" />
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form as VeeForm, useForm } from 'vee-validate';
import * as Yup from 'yup';
import { onMounted } from "vue";
import { useFormStore } from "@/stores/formStore";
import InputField from "../../common/InputField.vue";
import type { PersonalInfoForm } from '@/types/formTypes';
import { useRouter } from 'vue-router';
import { routingValidation } from '../../../utils/routingValidation';

const formStore = useFormStore();
const router = useRouter();

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(
            /^(\+\d{1,3}[- ]?)?\d{10}$/,
            "Invalid phone number"
        )
});

const { handleSubmit, validate } = useForm<PersonalInfoForm>({
    validationSchema: schema,
    initialValues: {
        name: '',
        email: '',
        phone: ''
    }
});

const onSubmit = handleSubmit((values: PersonalInfoForm) => {
    formStore.setCurrentStep(2)
    router.push(`/step/2`)
});

const validateAndSubmit = async (): Promise<boolean> => {
    const validationResult = await validate();
    if (validationResult.valid) {
        onSubmit();
        return true;
    }
    return false;
};

onMounted(() => {
    routingValidation();
    formStore.setFormValidationAndSubmission(validateAndSubmit);
});
</script>