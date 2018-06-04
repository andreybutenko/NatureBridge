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
    props: ['name', 'top', 'left', 'onPress', 'visible'],
    mounted() {
      setTimeout(() => {
        const background = this.$el.parentNode.firstChild;
        const width = background.offsetWidth;
        this.scale = width / this.targetWidth;
        //console.log(width, this.targetWidth, width / this.targetWidth, this.scale)
      }, 1000);

    },
    data() {
      return {
        targetWidth: 800,
        targetHeight: 600,
        scale: 1
      }
    },
    computed: {
      imageUrl() {
        return '/static/packing/' + this.name + '.png';
      },
      style() {
        return {
          cursor: 'pointer',
          position: 'absolute',
          top: (this.top / this.targetHeight * 100) + '%',
          left: (this.left / this.targetWidth * 100) + '%',
          transform: 'scale(' + this.scale + ')',
          transformOrigin: '0 0'
        }
      }
    },
    methods: {
      onPressImage() {
        //this.visible = false;
        this.onPress(this.name);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
