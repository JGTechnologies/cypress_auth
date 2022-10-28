<template>
  <vee-form :validation-schema="validationSchema" @submit="onSubmitted">
    <div class="relative mb-8">
      <vee-field
        class="peer h-10 w-full border-b-2 border-primary text-content focus:outline-none focus:border-primary bg-transparent placeholder-transparent"
        data-test="email-field"
        name="email"
        placeholder="Email address"
        type="email"
      />
      <label
        class="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm select-none pointer-events-none"
        for="email"
      >
        Email address
      </label>
      <error-message class="text-error" name="email" />
    </div>
    <div class="relative mb-4">
      <vee-field
        class="peer h-10 w-full border-b-2 border-primary text-content focus:outline-none focus:border-primary-300 bg-transparent placeholder-transparent"
        data-test="password-field"
        name="password"
        placeholder="Password"
        type="password"
      />
      <label
        class="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm select-none pointer-events-none"
        for="password"
      >
        Password
      </label>
      <error-message class="text-error" name="password" />
    </div>
    <button
      class="block w-full bg-primary text-content py-1.5 px-3 rounded"
      data-test="submit-button"
      :disabled="isSubmitted"
      type="submit"
    >
      Log In
    </button>
  </vee-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/utils/auth";

/**
 * Form validation rules.
 */
const validationSchema = {
  email: "required|email",
  password: "required|min:9|not_one_of:password",
};

/**
 * A value indicating whether the form is currently submitted.
 */
const isSubmitted = ref(false);

/**
 * A reference to the router.
 */
const router = useRouter();

/**
 * An event that is fired when the user submits the form.
 *
 * @param values The form input values.
 */
const onSubmitted = async (values: Record<string, unknown>) => {
  isSubmitted.value = true;
  const result = await login(values.email as string, values.password as string);

  if (result === true) {
    router.push({
      name: "HomeView",
    });

    return;
  }

  isSubmitted.value = false;
};
</script>

<style scoped></style>
