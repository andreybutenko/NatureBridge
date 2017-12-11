<template>
  <div class="container narrow">
    <div class="center-content">
      <LayeredImage :imageUrl="require('../assets/trail-cabins.jpg')">
        <LayeredImageSprite x="300px" y="350px" :scale="1" :imageUrl="require('../assets/player.png')" />

        <LayeredImageLabel x="80px" y="500px">To Camp</LayeredImageLabel>
        <LayeredImageNav x="0px" y="0px" height="600px" width="300px" :destination="backDestination" />

        <LayeredImageLabel x="600px" y="450px">Continue</LayeredImageLabel>
        <LayeredImageNav x="500px" y="0px" height="600px" width="300px" :destination="destination" />
      </LayeredImage>

      <p>You set off on the trail!</p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';

  export default {
    name: 'TrailCabins',
    components: { ...LayeredImagePackage },
    mounted() {
      globalStore.visitLocation('TrailCabins');
    },
    computed: {
      destination() {
        if(globalStore.getAttr('weedersTalked')) {
          return 'WeedersAlt';
        }
        else {
          return 'Weeders';
        }
      },
      backDestination() {
        if(globalStore.getAttr('salmonFreed')) {
          return 'CampHubAlt';
        }
        else {
          return 'CampHub';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 1em 0;
    color: white;
  }
</style>
