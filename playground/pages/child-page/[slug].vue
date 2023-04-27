<template>
  <div>
    <div v-if="post">
      <h2 style="text-align: center; margin-top: 0;">
        <span class="inline-block"
          v-shared-element="{
              id: post.slug, role: 'title'
          }">{{ post.title }}</span>
      </h2>

      <FakeImage v-shared-element="{
                id: post.slug, role: 'img'
            }" :width="1600" :height="900" :color="post.color" />
      <!--
      <div data-transition-role="title" :data-transition-id="post.slug" data-transition-scale="none">
        <h2>{{ post.title }}</h2>
      </div>
    -->
      <div v-html="post.content" />
    </div>
    <div v-else>
      <p>Not found</p>
    </div>
    <NuxtLink to="/child-page">Parent/Child Page Index</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { definePageMeta } from "#imports";
import { useContextualTransition } from "vue-contextual-transition";
import content from "@/data/content";

const route = useRoute();
const post = computed(() => content.find((p) => p.slug === route.params.slug));

definePageMeta({
  pageTransition: useContextualTransition({ group: 'child-page' }),
})
</script>