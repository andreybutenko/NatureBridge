<template>
  <div class="container narrow">
    <div class="center-content">
      <!--<img src="../assets/base-camp.png" />-->
      <LayeredImage :imageUrl="require('../assets/base-camp.png')">
        <SquirrelTrivia :shown="triviaEnabled" />
        <LayeredImageSprite x="650px" y="350px" :scale="1" :imageUrl="require('../assets/player.png')" :flip="true" />

        <LayeredImageLabel x="200px" y="500px">Lake</LayeredImageLabel>
        <LayeredImageNav x="0px" y="300px" height="290px" width="500px" destination="Lake" />
      </LayeredImage>

      <p>Welcome to NatureBridge!</p>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';
  import SquirrelTrivia from '../common/SquirrelTrivia';

  export default {
    name: 'CampHub',
    components: { ...LayeredImagePackage, SquirrelTrivia },
    mounted() {
      globalStore.visitLocation('CampHub');
    },
    data() {
      return {
        triviaEnabled: false
      }
    },
    computed: {
      showSquirrel() {
        return !globalStore.getAttr('basecampSquirrel');
      }
    },
    methods: {
      displayTrivia() {
         this.triviaEnabled = true;
         globalStore.setAttr('basecampSquirrel', true);
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
