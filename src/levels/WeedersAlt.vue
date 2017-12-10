<template>
  <div class="container narrow">
    <div class="center-content">
      <LayeredImage :imageUrl="require('../assets/weeders-bg.png')">
        <LayeredImageSprite x="200px" y="450px" :scale="0.8" :imageUrl="require('../assets/player.png')" />

        <LayeredImageLabel x="625px" y="290px" v-if="!weedersHelped">Talk</LayeredImageLabel>
        <LayeredImageNav x="500px" y="0px" height="600px" width="300px" destination="WeedersChatAlt" v-if="!weedersHelped" />

        <LayeredImageLabel x="325px" y="400px" :far="true" v-if="!fishSaved">Continue</LayeredImageLabel>
        <LayeredImageNav x="250px" y="0px" height="600px" width="250px" destination="TrailGame" v-if="!fishSaved" />

        <LayeredImageLabel x="50px" y="500px">Go Back</LayeredImageLabel>
        <LayeredImageNav x="00px" y="0px" height="600px" width="250px" destination="TrailCabins" />
      </LayeredImage>

      <p>You encounter some weeders.</p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';

  export default {
    name: 'WeedersAlt',
    components: { ...LayeredImagePackage },
    mounted() {
      globalStore.visitLocation('Weeders');
    },
    computed: {
      weedersHelped() {
        return globalStore.getAttr('weedersHelped');
      },
      fishSaved() {
        return globalStore.getAttr('salmonFreed');
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
