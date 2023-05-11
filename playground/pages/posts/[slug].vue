<template>
  <div>
    <div v-if="post">
      <h2 style="text-align: center;">
        <span
          v-shared-element="{ id: post.slug, role: 'title'}"
          class="inline-block"
        >{{ post.title }}</span>
      </h2>

      <FakeImage
        v-shared-element="{ id: post.slug, role: 'img'}"
        :width="1600"
        :height="900"
        :color="post.color"
      />
      <p>Post content</p>
      <NuxtLink to="#test">
        On-page link test
      </NuxtLink>
      <div v-html="post.content" />
      <h2 id="test">
        Test on-page link target
      </h2>
    </div>
    <div v-else>
      <p>Not found</p>
    </div>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useContextualTransition } from "vue-contextual-transition";
import content from "@/data/content";

const route = useRoute();
const post = computed(() => content.find((p) => p.slug === route.params.slug));

definePageMeta({
  pageTransition: useContextualTransition({  group: 'full-page' }),
})
</script>