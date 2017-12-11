<template>
  <div class="container" @click="() => { if(chatStage > -1) chatStage++; }">
    <RangerWiki :shown="displayWiki" :ondismiss="() => displayWiki = false" />
    <div class="container narrow">
      <div class="center-content">
        <LayeredImage :imageUrl="require('../assets/ranger-inside.png')">
          <LayeredImageSprite x="150px" y="350px" :scale="1.2" :imageUrl="require('../assets/player.png')" />
          <LayeredImageSprite x="800px" y="300px" :scale="1.2" :imageUrl="require('../assets/ranger.png')" :flip="true" />

          <template v-if="chatStage == -1">
            <LayeredImageLabel x="50px" y="250px">Outside</LayeredImageLabel>
            <LayeredImageNav x="0px" y="0px" height="600px" width="220px" destination="CampHub" />

            <LayeredImageLabel x="325px" y="200px" :wide="true">Ranger Wiki</LayeredImageLabel>
            <LayeredImageBtn x="320px" y="0px" height="600px" width="270px" :onclick="() => displayWiki = true" />

            <LayeredImageLabel x="630px" y="200px">Talk</LayeredImageLabel>
            <LayeredImageBtn x="590px" y="0px" height="600px" width="210px" :onclick="() => chatStage = 0" />
            </template>

          <LayeredImageChat x="280px" y="300px" v-if="chatStage == 0 || chatStage == 1">Hey, what direction should I go on the trail?</LayeredImageChat>
          <LayeredImageChat x="460px" y="140px" :flip="true" :tall="true" v-if="chatStage == 2">Here's a map! You'll go past the cabins, by the weeders, and all the way to the Elwah River.</LayeredImageChat>
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
        displayWiki: false,
        chatStage: -1
      }
    },
    watch: {
      chatStage() {
        if(this.chatStage == 2) {
          globalStore.addItem('map');
        }
        if(this.chatStage > 2) {
          this.chatStage = -1;
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
