<script>
export default {
  created() {
    const { slug } = this.$store.getters['workspace/getDefaultWorkspace']
    if (slug) {
      this.$router.push({
        name: 'Dashboard',
        params: {
          slug: slug
        }
      })
    } else {
      this.$router.push({
        name: 'Welcome'
      })
    }
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
