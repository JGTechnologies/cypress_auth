<template>
  <the-drawer>
    <template #content>
      <div class="mt-16 mx-8">
        <slot />
      </div>
    </template>
  </the-drawer>
</template>

<script setup lang="ts">
import TheDrawer from "@/components/TheDrawer.vue";
</script>
