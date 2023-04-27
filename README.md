# Nuxt Contextual Transition

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The Nuxt module for using the [Vue Contextual Transition package](https://github.com/beepy/vue-contextual-transition). This module provides the following conveniences for Nuxt over using the Vue Contextual Transition package directly:

1. It automatically imports the required `useContextualTransition` function.
2. It automatically imports the required css. 
3. It automatically deals with retaining the scroll position when navigating between pages.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/beepy/nuxt-contextual-transition?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

This module makes it easier to provide meaningful cross-browser transitions between pages — or other state changes if desired — for Nuxt projects. It provides a single opinionated transition that can animate in two ways, and looks like this:

<p align="center">
  <img src="https://beepy.github.io/vue-contextual-transition/demo.gif" />
</p>

The two styles are:

1. **Shared Element Transition**: intended for navigating up and down a site's hierarchy, for example, from a blog index to a blog post. Individual elements, like a post title and a thumbnail image, can be transitioned from their appearance on an index page to their appearance on a post page, and back. Not to be confused with the experimental [Chrome feature, View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/).

  An element can be designated for transitioning like this:

  ```html
  <img
    src="..."
    v-shared-element="{ id: post.slug, role: 'image', type: 'post' }"
  />
  ```

2. **Relative Slide Transition**: intended for navigating laterally in a site's hierarchy, that is, between pages of like-content such as navigating from a current blog post to an older blog post. Content can slide horizontally (or vertically if preferred).

  A page view can be designated for transitioning like this:

  ```html
  <template>
    <div v-relative-slide="{ value: post.sortOrder, type: 'post' }">
      <!-- page content -->
    </div>
  </template>
  ```

In both cases, content and element relationships are declared via directives.

## Quick Setup

1. Add `nuxt-contextual-transition` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-contextual-transition

# Using yarn
yarn add --dev nuxt-contextual-transition

# Using npm
npm install --save-dev nuxt-contextual-transition
```

2. Add `nuxt-contextual-transition` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-contextual-transition'
  ]
})
```

Then, in `app.vue` or wherever you have your root `<NuxtPage />`:

```vue
<script setup>
const contextualTransition = useContextualTransition();
</script>

<template>
  <div class="contextual-transition-container">
    <NuxtPage :transition="contextualTransition">
  </div>
</template>
```

You can then apply the directives to views and individual elements as indicated above.

[Please see the Vue Contextual Transition docs for details](https://beepy.github.io/vue-contextual-transition/).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-contextual-transition/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-contextual-transition

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-contextual-transition.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-contextual-transition

[license-src]: https://img.shields.io/npm/l/nuxt-contextual-transition.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-contextual-transition

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
