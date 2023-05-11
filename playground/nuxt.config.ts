import { searchForWorkspaceRoot } from 'vite'

export default defineNuxtConfig({
  modules: ['../src/module'],
  // contextualTransition: {
  //   hashScroll: false
  // },
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
})
