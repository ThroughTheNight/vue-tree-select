<template>
  <span>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${type}`" />
    </svg>
  </span>
</template>

<script>

export default {

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
.icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>