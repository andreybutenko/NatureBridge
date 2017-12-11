<template>
  <div class="container">
    <RangerWiki :shown="displayWiki" :ondismiss="() => displayWiki = false" />
    <div class="container narrow">
      <div class="center-content">
        <LayeredImage :imageUrl="require('../assets/ranger-inside.png')">
          <LayeredImageSprite x="150px" y="350px" :scale="1.2" :imageUrl="require('../assets/player.png')" />

          <LayeredImageLabel x="50px" y="250px">Outside</LayeredImageLabel>
          <LayeredImageNav x="0px" y="0px" height="600px" width="220px" destination="CampHub" />

          <LayeredImageLabel x="325px" y="200px" :wide="true">Ranger Wiki</LayeredImageLabel>
          <LayeredImageBtn x="320px" y="0px" height="600px" width="270px" :onclick="() => displayWiki = true" />
        </LayeredImage>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import LayeredImagePackage from '../common/LayeredImage/';
  import RangerWiki from '../common/RangerWiki';

  export default {
    name: 'RangerStation',
    components: { ...LayeredImagePackage, RangerWiki },
    mounted() {

    },
    data() {
      return {
        displayWiki: false
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
