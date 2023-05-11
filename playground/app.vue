<template>
  <NuxtLayout>
    <h1 class="header">
      Contextual Transition Playground
    </h1>
    <p class="text-center">
      <NuxtLink to="/">
        Full Page
      </NuxtLink>
      |
      <NuxtLink to="/child-page">
        Child Page
      </NuxtLink>
      |
      <NuxtLink to="/modal">
        Modal
      </NuxtLink>
    </p>
    <div class="content">
      <div class="relative">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="css">

html, body {
  padding: 0;
  margin: 0;
}

h1.header {
  background-color: #f1f3f5;
  text-align: center;
  margin: 0;
  padding: 0.1em 0;
}

/* parent of transitioning element must have position: relative and no padding */
.relative {
  position: relative;
}

/* transitioning elements cannot be display: inline */
.inline-block {
  display: inline-block;
}

.block {
  display: block;
}

.content {
  margin: 0 auto;
  max-width: 72ch;
  padding: 1ch;
}

.text-center { text-align: center; }
input.reset[type="submit"],
input.reset[type="reset"],
input.reset[type="button"],
button.reset {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0;
}

a.reset {
  text-decoration: none;
  color: inherit;
}
</style>