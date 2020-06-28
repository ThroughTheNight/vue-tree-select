<template>
  <span>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${type}`" />
    </svg>
  </span>
</template>

<script>

export default {

  name: 'icon',

  props: {
    type: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
// 设置 icon-font
span {
  display: inline-block;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>