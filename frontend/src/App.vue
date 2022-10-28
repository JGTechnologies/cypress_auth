<template>
  <router-view v-slot="{ Component }">
    <component
      class="h-full min-h-screen w-screen"
      :data-theme="currentTheme"
      :is="currentLayout"
    >
      <component :is="Component" />
    </component>
  </router-view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

/**
 * A reference to the route.
 */
const route = useRoute();

/**
 * Gets the current theme.
 */
const currentTheme = computed(() => "business");

/**
 * Gets the current layout.
 */
const currentLayout = computed(() => {
  const layout = route.meta.layout ?? "default";

  return `${layout}-layout`;
});
</script>

<style scoped></style>
