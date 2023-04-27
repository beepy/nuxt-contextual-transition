import { defineNuxtModule, addPlugin, addImports, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'contextual-transition',
    configKey: 'contextualTransition'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

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
    // nuxt.options.css.push(resolver.resolve('./runtime/css/contextualTransition.css'))
    
  }
})
