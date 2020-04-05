<template>
  <section>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>

</style>
