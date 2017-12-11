<template>
  <div class="container narrow">
    <div class="center-content" @click="() => next()">
      <LayeredImage :imageUrl="backgroundImage">
        <LayeredImageSprite x="600px" y="400px" :scale="1" :imageUrl="require('../assets/player.png')" :flip="true" />

        <template v-if="scene == 0">
          <LayeredImageChat x="200px" y="350px">Help! Help!</LayeredImageChat>
        </template>
        <template v-if="scene == 1">
          <LayeredImageChat x="200px" y="350px">I'm stuck and can't get back to the river!</LayeredImageChat>
        </template>
        <template v-if="scene == 2">
          <LayeredImageChat x="280px" y="300px" :flip="true">Woah, how did you get stuck?</LayeredImageChat>
        </template>
        <template v-if="scene == 3">
          <LayeredImageChat x="200px" y="250px" :tall="true">It’s been getting warmer and drier the past several years and that’s been changing how much water is in the river.</LayeredImageChat>
        </template>
        <template v-if="scene == 4">
          <LayeredImageChat x="280px" y="300px" :flip="true">How does that change the way the river flows?</LayeredImageChat>
        </template>
        <template v-if="scene == 5">
          <LayeredImageChat x="200px" y="250px" :tall="true">The snow is melting earlier and so less water flows through the river during the summer months.</LayeredImageChat>
        </template>
        <template v-if="scene == 6">
          <LayeredImageChat x="200px" y="250px" :tall="true">This is the spot that I know I’m supposed to come back to spawn, but the water is lower this year and now I’m stuck!</LayeredImageChat>
        </template>
        <template v-if="scene == -1 || scene == 7">
          <LayeredImageLabel x="280px" y="100px" :wide="true" :onclick="() => scene = 8">Splash water on Salmon</LayeredImageLabel>
          <LayeredImageLabel x="280px" y="150px" :wide="true" :onclick="() => scene = hasShovel ? 10 : 9">Dig trench to stream</LayeredImageLabel>
          <LayeredImageLabel x="280px" y="200px" :wide="true" :onclick="() => goBack()">Go back on trail</LayeredImageLabel>
          <LayeredImageLabel x="280px" y="250px" :wide="true" :onclick="() => scene = 10">cheat</LayeredImageLabel>
        </template>
        <template v-if="scene == 8">
          <div class="dialog">
            <p>You try splashing water on the Salmon, but it's not enough. Nothing happens.</p>
            <div class="btn" @click.stop="() => scene = 7">Ok</div>
          </div>
        </template>
        <template v-if="scene == 9">
          <div class="dialog">
            <p>You try digging a trench with just your hands, but you're not able to. You need a shovel...</p>
            <div class="btn" @click.stop="() => scene = 7">Ok</div>
          </div>
        </template>
        <template v-if="scene == 10">
          <div class="dialog">
            <p>You use your shovel and dig out the trench!</p>
            <div class="btn" @click.stop="() => scene++">Ok</div>
          </div>
        </template>
        <template v-if="scene == 11">
          <LayeredImageChat x="180px" y="300px" :flip="true">I'm free! Thank you!</LayeredImageChat>
        </template>
        <template v-if="scene == 12">
          <div class="dialog">
            <p>This looks like the end of the trail.</p>
            <div class="btn" @click.stop="() => goBack()">Go back</div>
          </div>
        </template>
      </LayeredImage>
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
    },
    data() {
      return {
        scene: 0,
        fishFreed: false
      }
    },
    methods: {
      next() {
        if(this.scene < 7 || this.scene == 11) this.scene++;
      },
      goBack() {
         this.$router.push('TrailGameAlt');
      }
    },
    computed: {
      backgroundImage() {
        if(this.fishFreed) {
          return require('../assets/fish-freed-bg.png');
        }
        else {
          return require('../assets/fish-trapped-bg.png');
        }
      },
      hasShovel() {
        return globalStore.has('shovel');
      }
    },
    watch: {
      scene() {
        if(this.scene == 10) {
          globalStore.setAttr('salmonFreed', true);
          this.fishFreed = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    position: absolute;
    background-color: #eee;
    top: 200px;
    width: 400px;
    left: 200px;
    padding: 0 16px 16px 16px;

    p, .btn {
      font-family: 'VT323';
      font-size: 24px;
      line-height: 1em;
    }

    .btn {
      cursor: pointer;
      background-color: #3498db;
      padding: 16px;
      text-align: center;
      color: white;
      transition: 250ms all;

      &:hover {
        background-color: #2980b9;
      }
    }
  }

  p {
    margin: 1em 0;
  }
</style>
