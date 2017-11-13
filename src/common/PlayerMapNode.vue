<template>
  <div
    v-if="visible"
    :style="style">
    <span>{{ name }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PlayerMapNode',
    props: ['name', 'top', 'left', 'visible'],
    computed: {
      style() {
        return {
          position: 'absolute',
          top: this.top + 'px',
          left: this.left + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    border: 2px solid black;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;

    span {
      display: block;
      margin-top: 25px;
      white-space: nowrap;
    }
  }
</style>
