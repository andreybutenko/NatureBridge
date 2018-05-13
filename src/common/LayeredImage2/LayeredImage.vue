<template>
  <div class="layered-image" @mousemove="onmousemove($event)" @click="click">
    <img class="layered-image-img" :src="imageUrl" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImage',
    props: ['imageUrl', 'mousemove', 'onclick'],
    methods: {
      onmousemove(e) {
        if(!!this.mousemove) {
          this.mousemove(e);
        }
      },
      click() {
        if(!!this.onclick) {
          this.onclick();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image {
    display: inline-block;
    position: relative;

    img {
      max-width: 100%;
    }
  }
</style>
