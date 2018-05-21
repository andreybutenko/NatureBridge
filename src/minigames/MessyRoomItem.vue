<template>
  <img
    v-if="visible"
    @click="onPressImage"
    :src="imageUrl"
    :style="style" />
</template>

<script>
  export default {
    name: 'MessyRoomItem',
    props: ['name', 'top', 'left', 'onPress'],
    data() {
      return {
        visible: true
      }
    },
    computed: {
      imageUrl() {
        return require('../assets/messy/' + this.name + '.png');
      },
      style() {
        return {
          cursor: 'pointer',
          position: 'absolute',
          top: this.top + 'px',
          left: this.left + 'px'
        }
      }
    },
    methods: {
      onPressImage() {
        this.visible = false;
        this.onPress(this.name);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
