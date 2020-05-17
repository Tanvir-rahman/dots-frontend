<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="name" />
  </svg>
</template>

<script>
// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../icons/svg', false, /\.svg$/)
requireAll(req)

export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      // icon filename
      type: String,
      required: true
    },
    className: {
      // css class name
      type: String,
      default: ''
    }
  },
  computed: {
    name() {
      const icon = this.iconName
      return icon ? `#icon-${icon}` : ''
    },
    svgClass() {
      const className = this.className
      return className ? `svg-icon ${className}` : 'svg-icon'
    }
  }
}
</script>

<style>
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor; /* important */
    overflow: hidden;
  }
</style>
