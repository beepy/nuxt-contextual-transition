<template>
  <div class="playground-index">
    <h2>Full Page Transitioning</h2>
    <ul>
      <li
        v-for="post in posts"
        :key="post.slug"
      >
        <NuxtLink :to="`/posts/${post.slug}`">
          <FakeImage 
            v-shared-element="{
              id: post.slug, role: 'img'
            }"
            :color="post.color"
          />
          <p>
            <span
              v-shared-element="{
                id: post.slug, role: 'title'
              }"
              class="inline-block"
            >{{ post.title }}</span>
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { definePageMeta } from "~/.nuxt/imports";
import { useContextualTransition } from "vue-contextual-transition";

import content from "@/data/content";

const posts = computed(() => content)

definePageMeta({
  pageTransition: useContextualTransition({ group: 'full-page' }),
});
</script>

<style lang="css">
.playground-index ul, .playground-index li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.playground-index ul {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  justify-items: space-around;
  justify-content: center;
  gap: 1.5rem;
}

.playground-index ul > * {
  max-width: 256px;
}

.playground-index ul a {
  display: block;
  padding: 1ch;
}

.playground-index ul a svg {
  width: 100%;
}

</style>