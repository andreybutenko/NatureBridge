<template>
  <div class="container narrow">
    <div class="center-content">
      <!--<img src="../assets/base-camp.png" />-->
      <LayeredImage :imageUrl="require('../assets/base-camp.png')">
        <LayeredImageSprite x="250px" y="400px" :scale="1" :imageUrl="require('../assets/player.png')" />
        <LayeredImageChat x="400px" y="400px">Where should I go?</LayeredImageChat>

        <LayeredImageLabel x="80px" y="340px">Cabin</LayeredImageLabel>
        <LayeredImageNav x="0px" y="150px" height="280px" width="280px" destination="Cabin" />

        <LayeredImageLabel x="400px" y="290px" :far="true">Ranger Station</LayeredImageLabel>
        <LayeredImageNav x="280px" y="100px" height="280px" width="320px" destination="RangerStation" />

        <LayeredImageLabel x="650px" y="340px" :far="false">Trail</LayeredImageLabel>
        <LayeredImageNav x="600px" y="150px" height="300px" width="200px" destination="TrailHead" />
      </LayeredImage>
      <p>Welcome to NatureBridge! You have claimed your camp bed, rolled out your sleeping bag, and grabbed a snack from the dining hall. What would you like to do?</p>

      <div>
        <router-link to="Cabin">Visit your cabin</router-link>
        <router-link to="TrailHead">Go for a hike</router-link>
        <router-link to="RangerStation">Enter the ranger station</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';

  export default {
    name: 'CampHub',
    components: { ...LayeredImagePackage },
    mounted() {
      globalStore.visitLocation('CampHub');
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 1em 0;
  }
</style>
