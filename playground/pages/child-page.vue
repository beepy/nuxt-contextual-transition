<template>
<div>
  <h2><NuxtLink to="/child-page">Parent/Child Page Example</NuxtLink></h2>
  <p>All child pages will appear here on the parent page</p>
  <div class="relative">
    <NuxtPage />
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

</script>