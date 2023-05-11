import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import type { RouterConfig } from '@nuxt/schema';
import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';

import { useContextualTransition, install } from  
  'vue-contextual-transition';

// imports a small amount of required css
import "vue-contextual-transition/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(install)

  const runtimeConfig = useRuntimeConfig()
  const hashScroll = runtimeConfig.public.contextualTransition.hashScroll;

  // scroll behavior
  nuxtApp.$router.options.scrollBehavior = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: any
  ) => {
    let setCallbacks =
      typeof to.meta?.pageTransition === 'object'
        ? to.meta?.pageTransition?.name === 'contextual-transition'
        : false;

    if (
      typeof from.meta?.pageTransition !== 'object' ||
      from.meta?.pageTransition?.name !== 'contextual-transition'
    ) {
      setCallbacks = false;
    }
    let result = savedPosition ?? (
      (to.hash && hashScroll !== false) ? { el: to.hash, behavior: hashScroll } : { left: 0, top: 0 }
      );
    if (setCallbacks) {
      return new Promise((resolve, reject) => {
        resolve(result)
      });
    } else {
      return result;
    }
  }
});