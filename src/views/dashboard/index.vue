<template>
  <div class="dashboard" />
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  created() {
    if (!this.$store.getters.hasWorkspace) {
      this.$router.replace({ name: 'Welcome' })
    }
  }
}
</script>
