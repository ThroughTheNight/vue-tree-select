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
  width: 14px;
  height: 14px;
  fill: currentColor;
  overflow: hidden;
}
</style>