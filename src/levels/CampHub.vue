<template>
  <div class="container narrow">
    <div class="center-content">
      <!--<img src="../assets/base-camp.png" />-->
      <LayeredImage :imageUrl="require('../assets/base-camp.png')">
        <SquirrelTrivia :shown="triviaEnabled" />
        <LayeredImageSprite x="250px" y="400px" :scale="1" :imageUrl="require('../assets/player.png')" />
        <LayeredImageChat x="360px" y="350px">Where should I go?</LayeredImageChat>

        <LayeredImageLabel x="80px" y="340px">Cabin</LayeredImageLabel>
        <LayeredImageNav x="0px" y="150px" height="280px" width="280px" destination="Cabin" />

        <LayeredImageLabel x="400px" y="290px" :far="true">Station</LayeredImageLabel>
        <LayeredImageNav x="280px" y="100px" height="280px" width="320px" destination="RangerStation" />

        <LayeredImageLabel x="650px" y="340px" :far="false">Trail</LayeredImageLabel>
        <LayeredImageNav x="600px" y="150px" height="300px" width="200px" destination="TrailHead" />

        <LayeredImageSprite x="100px" y="450px" :scale="1" :imageUrl="require('../assets/squirrel.png')" :onclick="() => displayTrivia()" v-if="showSquirrel" />
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
