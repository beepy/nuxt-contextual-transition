<template>
  <div class="modal-content" @click.stop>
    <NuxtLink to="/modal" class="reset close">&times;</NuxtLink>
      <FakeImage class="block" :width="320" :height="160" :color="route.params.slug"
          v-shared-element="{
            id: route.params.slug, role: 'img'
        }"
      />
    <NuxtLink v-if="previousSlug" :to="`/modal/${previousSlug}`" style="float: left">Previous</NuxtLink>
    <NuxtLink v-if="nextSlug" :to="`/modal/${nextSlug}`" style="float: right">Next</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slugs = ['gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug);
const slugIndex = computed(() => slugs.indexOf(slug.value))
const nextSlug = computed(() => slugIndex.value < (slugs.length - 1) ? slugs[slugIndex.value + 1] : undefined)
const previousSlug = computed(() => slugIndex.value > 0 ? slugs[slugIndex.value - 1] : undefined)
</script>

<style>

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

</style>