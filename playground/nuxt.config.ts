export default defineNuxtConfig({
  modules: ['../src/module'],
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
})
