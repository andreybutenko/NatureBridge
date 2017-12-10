<template>
  <div class="container narrow">
    <div class="center-content">
      <LayeredImage :imageUrl="require('../assets/weeders-bg.png')">
        <LayeredImageSprite x="200px" y="450px" :scale="0.8" :imageUrl="require('../assets/player.png')" />

        <LayeredImageLabel x="500px" y="350px">Talk</LayeredImageLabel>
        <LayeredImageNav x="350px" y="0px" height="600px" width="450px" destination="WeedersChat" />
      </LayeredImage>

      <p>You encounter some weeders.</p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';

  export default {
    name: 'Weeders',
    components: { ...LayeredImagePackage },
    mounted() {
      globalStore.visitLocation('Weeders');
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 1em 0;
  }
</style>
