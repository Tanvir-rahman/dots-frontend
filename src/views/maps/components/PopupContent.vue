<template>
  <div>
    <h4>{{ feature.properties.title }}</h4>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    feature: {
      required: true,
      type: Object
    }
  }
})
</script>
