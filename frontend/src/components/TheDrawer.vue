<template>
  <div class="drawer">
    <input id="the-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot name="content" />
      <label
        for="the-drawer"
        class="btn btn-sm btn-secondary drawer-button absolute top-0 left-0"
      >
        <div class="space-y-1">
          <div class="w-4 h-0.5 bg-gray-600" />
          <div class="w-4 h-0.5 bg-gray-600" />
          <div class="w-4 h-0.5 bg-gray-600" />
        </div>
      </label>
    </div>
    <div class="drawer-side">
      <label for="the-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <router-link :to="{ name: 'HomeView' }">Home</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
