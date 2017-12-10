<template>
  <div class="container narrow">
    <div class="center-content">
      <LayeredImage :imageUrl="require('../assets/fish-trapped-bg.png')">
        <LayeredImageSprite x="600px" y="400px" :scale="1" :imageUrl="require('../assets/player.png')" :flip="true" />
      </LayeredImage>

      <p>You set off on the trail!</p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';

  export default {
    name: 'FishScene',
    components: { ...LayeredImagePackage },
    mounted() {
      globalStore.visitLocation('FishScene');
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 1em 0;
  }
</style>
