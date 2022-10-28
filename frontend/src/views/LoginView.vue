<template>
  <div class="grid h-screen place-items-center">
    <div class="card w-96 shadow-xl">
      <div class="card-body bg-base-100">
        <log-in-form data-test="login-form" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogInForm from "@/components/LogInForm.vue";
</script>

<style scoped></style>
