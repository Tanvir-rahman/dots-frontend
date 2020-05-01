<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: unset;
}
#app {
  @import '@/styles/app';

  a {
    text-decoration: none !important;
    text-decoration-line: none !important;
    -moz-text-decoration-line: none;
  }
}
</style>
