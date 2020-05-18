<script>
export default {
  created() {
    const { slug } = this.$store.getters['workspace/getDefaultWorkspace']
    this.$router.replace({ path: '/ws/' + slug })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
