import { defineNuxtPlugin } from '#app'
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
    if (setCallbacks) {
      return new Promise((resolve, reject) => {
        const position = savedPosition ?? { left: 0, top: 0 };
        resolve(position);
      });
    } else {
      const result = savedPosition ?? { left: 0, top: 0 };

      return result;
    }
  }

});