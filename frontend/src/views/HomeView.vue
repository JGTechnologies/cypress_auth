<template>
  <button class="btn" data-test="data-button" @click="getUserData">
    Fetch User Data
  </button>
  <div data-test="data-div">
    {{ userData }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AxiosApi from "@/api/AxiosApi";

/**
 * The current user data.
 */
const userData = ref();

/**
 * Gets the current user data.
 */
const getUserData = async () => {
  const axiosApi = new AxiosApi(import.meta.env.VITE_API_BASE_URL);

  const response = await axiosApi.get("auth/user/");

  userData.value = response.data;
};
</script>
