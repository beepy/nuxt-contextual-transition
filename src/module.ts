import { defineNuxtModule, addPlugin, addImports, createResolver } from '@nuxt/kit'

import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';

// Module options TypeScript interface definition
export type HashScrollType = false | 'smooth' | 'instant' | 'auto';

export interface ModuleOptions {
  hashScroll: HashScrollType;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'contextual-transition',
    configKey: 'contextualTransition',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  // Default configuration options of the Nuxt module
  defaults: { hashScroll: 'smooth' },

  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.contextualTransition = { ...options };

    addPlugin(resolver.resolve('./runtime/plugins/contextualTransition'))

    addImports([
      {
        name: 'useContextualTransition',
        as: 'useContextualTransition',
        from: resolver.resolve('./runtime/utils/contextualTransition')
      },
      {
        name: 'updateContextualTransitionResolve',
        as: 'updateContextualTransitionResolve',
        from: resolver.resolve('./runtime/utils/contextualTransition')
      },
    ]);
  }
})
