<template>
  <div class="scene">
    <LayeredImage :mousemove="scene.mousemove" :onclick="scene.onclick" :imageUrl="imageUrl">
      <template v-for="element in scene.elements">
        <LayeredImageSprite
          v-if="element.type == 'sprite'"
          :imageUrl="'/static/' + element.source"
          :x="element.left"
          :y="element.top"
          :size="element.size"
          :scale="element.scale || 1"
          :flip="!!element.flip"
          :onclick="element.onclick"
          :selected="element.selected"
          :dancing="element.dancing" />

        <LayeredImageLabel
          v-if="element.type == 'label'"
          :x="element.left"
          :y="element.top"
          :onclick="element.onclick"
          :selected="element.selected"
          :text="element.text" />

        <LayeredImageChat
          v-if="element.type == 'chat'"
          :x="element.left"
          :y="element.top"
          :flip="element.flip"
          :onclick="element.onclick"
          :selected="element.selected"
          :text="element.text" />

        <LayeredImageSelectable
          v-if="element.type == 'selectable'"
          :x="element.left"
          :y="element.top"
          :width="element.width"
          :height="element.height"
          :onclick="element.onclick"
          :debug="element.debug" />
      </template>
    </LayeredImage>

    <div class="step-container" v-if="!!layerStep">
      <div class="btn" v-if="layerStep.stepType == 'Click through'" @click="takeStep()">Next</div>
      <template v-else>
        <div>{{ layerStep.prompt }}</div>
        <div class="btn" v-for="(option, i) in layerStep.options" @click="takeStep(i)">
          {{ option.description }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import LayeredImage from './LayeredImage';
  import LayeredImageSprite from './LayeredImageSprite';
  import LayeredImageLabel from './LayeredImageLabel';
  import LayeredImageChat from './LayeredImageChat';
  import LayeredImageSelectable from './LayeredImageSelectable';

  export default {
    name: 'SceneGenerator',
    components: {
      LayeredImage,
      LayeredImageSprite,
      LayeredImageLabel,
      LayeredImageChat,
      LayeredImageSelectable
    },
    props: ['scene', 'takeStep', 'layerStep'],
    data() {
      return {
      }
    },
    computed: {
      imageUrl() {
        return '/static/' + this.scene.background;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scene {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .step-container {
      .btn {
        background-color: #dfe6e9;
        border: 1px solid #636e72;
        width: 400px;
        max-width: 100%;
        text-align: center;
        padding: 8px;
        cursor: pointer;
        font-size: 18px;
        transition: 250ms all;

        &:hover {
          background-color: #74b9ff;
        }
      }
    }
  }
</style>
