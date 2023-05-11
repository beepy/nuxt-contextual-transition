declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    contextualTransition: {
      hashScroll: false | 'smooth' | 'instant' | 'auto';
    }
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
