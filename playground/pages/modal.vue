<template>
<div>
  <h2><NuxtLink to="/modal">Modal Example</NuxtLink></h2>
  <p>All child pages will appear here on the parent page</p>
  <p v-if="route.params.slug">Slug: {{ route.params.slug }}</p>
  <p v-else><em>No slug</em></p>
  <div class="modal-test">
    <ContextualTransition
      v-for="s in slugs"
      style="width: 160px; height: 160px; flex-basis: 160px;"
      :key="s"
      :duration="222"
      :allow-motion="!forceReducedMotion"
      :allow-overflow="true"
    >
      <NuxtLink 
        v-if="s !== route.params.slug"
        :to="`/modal/${s}`"
        style="display: block;"
      >
        <FakeImage
          :width="160"
          :height="160"
          :color="s"
          class="block"
          style="border: 4px solid transparent"
          v-shared-element="{
            id: s, role: 'img', teleportSelector: '[data-modal]'
        }"/>
      </NuxtLink>
      <div v-else v-shared-element-teleport="'[data-modal]'">
        <!-- <div style="width: 160px; height: 160px; background-color: #eee;" /> -->
        <FakeImage
          :width="160"
          :height="160"
          :color="s"
          class="block"
          style="border: 4px solid black"
          />
      </div>
    </ContextualTransition>
  </div>
  <div>
    <Teleport to="body">
      <!--
        this outer transition keeps the teleported contents alive during the
        "main" transition above -- it's a bit of a hack. Otherwise, the
        teleported elements would be removed immediately and unavailable for
        animation.
      -->
      <Transition name="contextual-transition">
        <div
          v-if="route.params.slug"
          class="modal"
          data-modal=""
          style="--contextual-transition-duration: 222ms;"
          @click="closeModal"
        >
          <!--
            this inner transition is for the "Relative Slide Transition" as you
            navigate between "slides"
          -->
          <ContextualTransition group="modalup" :duration="222">
            <div :key="slug" v-relative-slide="{ value: slugIndex, type: 'modal' }">
              <NuxtPage />
            </div>
          </ContextualTransition>
        </div>
      </Transition>
    </Teleport>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import FakeImage from "../components/FakeImage.vue";
import { ContextualTransition } from "vue-contextual-transition";

const slugs = ['gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
const route = useRoute();
const router = useRouter();

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug);
const slugIndex = computed(() => slugs.indexOf(slug.value))
const forceReducedMotion = ref(false);

function closeModal() { router.push('/modal') }

/*
We turn on "force reduced motion" when we are navigating "laterally," that is,
not opening or closing a "slide." This prevents the modal's contents from
moving/transitioning back to their "source" panels in the content underneath
the modal.
 */
onBeforeRouteUpdate((to, from) => {
  if (to.params.slug && from.params.slug) {
    forceReducedMotion.value = true
  } else {
    forceReducedMotion.value = false
  }
})

</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  padding-top: 20vh;
}

.modal a.reset.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.modal a.reset.close:hover,
.modal a.reset.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-test {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

</style>