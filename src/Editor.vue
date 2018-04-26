<template>
  <div class="editor" tabindex="0">
    <Toolbar
      :previewEnabled="previewEnabled"
      :togglePreview="togglePreview"
      :showSource="showSource" />
    <div class="workspace">
      <ElementSelector
        v-if="!this.previewEnabled"
        :addElement="addElement" />
      <div class="wide">
        <SceneGenerator
          :layerStep="previewEnabled ? layerStep : false"
          :takeStep="takeStep"
          :scene="sceneProcessed" />
      </div>
      <div class="vertical" v-if="!this.previewEnabled">
        <LayerEditor
          :layer="activeLayer"
          :changeLayer="changeLayer" />
        <BackgroundEditor
          :onUpdate="onBackgroundUpdate"
          :index="activeLayer" />
        <StepEditor
          :data="layerStep"
          :onUpdate="onStepTypeUpdate" />
        <ElementEditor
          :setElementProperty="setElementProperty"
          :index="selectedIndex"
          :element="currentSelected" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Toolbar from './common/editor/Toolbar';
  import ElementSelector from './common/editor/ElementSelector';
  import SceneGenerator from './common/LayeredImage2/SceneGenerator';
  import ElementEditor from './common/editor/ElementEditor';
  import StepEditor from './common/editor/StepEditor';
  import BackgroundEditor from './common/editor/BackgroundEditor';
  import LayerEditor from './common/editor/LayerEditor';

  export default {
    name: 'Editor',
    components: {
      Toolbar,
      ElementSelector,
      SceneGenerator,
      ElementEditor,
      StepEditor,
      BackgroundEditor,
      LayerEditor
    },
    data() {
      return {
        previewEnabled: false,
        selectedIndex: -1,
        offsetX: 0,
        offsetY: 0,
        canvasWidth: 0,
        canvasHeight: 0,
        drag: false,
        activeLayer: 0,
        layers: [
          []
        ],
        layerSteps: [
          null
        ],
        scene: {
          background: 'backgrounds/base-camp.png',
          mousemove: e => {
            if(e.target.classList.contains('layered-image-img')) {
              this.offsetX = e.target.x;
              this.offsetY = e.target.y;
              this.canvasWidth = e.target.clientWidth;
              this.canvasHeight = e.target.clientHeight;
            }

            if(this.selectedIndex > -1 && this.drag) {
              const x = Math.round((e.pageX - this.offsetX) / this.canvasWidth * 100) + '%';
              const y = Math.round((e.pageY - this.offsetY) / this.canvasHeight * 100) + '%';
              this.currentSelected.left = x;
              this.currentSelected.top = y;
            }
          },
          elements: [] // automatically generated as sceneProcessed
        }
      }
    },
    methods: {
      select(index, drag) {
        this.selectedIndex = index;
        this.drag = drag;
      },
      addElement(data) {
        this.layer.push(data);
      },
      removeElement(index) {
        this.layer.splice(index - this.numElementsInBackground, 1);
        this.selectedIndex = -1;
      },
      setElementProperty(property, value) {
        this.currentSelected[property] = value;
      },
      showSource() {
        window.open('', null, 'status=yes,toolbar=no,menubar=no,location=no').document.write('<pre>' +
          JSON.stringify({
            background: this.scene.background,
            layers: this.layers,
            layerSteps: this.layerSteps
          }, null, 2) +
        '</pre>');
      },
      changeLayer(offset) {
        this.selectedIndex = -1;
        this.activeLayer = Math.max(this.activeLayer + offset, 0);
        if(this.activeLayer >= this.layers.length) {
          this.layers.push([]);
          this.layerSteps.push({
            stepType: 'Click through',
            prompt: 'You respond with:',
            options: []
          })
        }
      },
      onStepTypeUpdate(stepType, prompt, options) {
        this.layerSteps[this.activeLayer] = {
          index: this.activeLayer,
          stepType: stepType,
          prompt: prompt,
          options: options
        };
      },
      onBackgroundUpdate(background) {
        this.scene.background = 'backgrounds/' + background;
      },
      takeStep(i) {
        if(this.layerStep.stepType == 'Click through') {
          this.activeLayer++;
        }
        else {
          this.activeLayer = this.layerStep.options[i].layer;
        }
      },
      togglePreview() {
        this.selectedIndex = -1;
        this.activeLayer = 1;
        this.previewEnabled = !this.previewEnabled;
      },
      escapeKeyListener: function(e) {
        if((e.keyCode === 46 || e.keyCode == 8) && this.selectedIndex != -1) {
          this.removeElement(this.selectedIndex);
        }
      }
    },
    computed: {
      numElementsInBackground() {
        return this.layers[0].length;
      },
      layerStep() {
        return {
          ...this.layerSteps[this.activeLayer],
          index: this.activeLayer
        }
      },
      sceneProcessed() {
        return {
          ...this.scene,
          onclick: () => {
            this.selectedIndex = -1;
            this.drag = false;
          },
          elements: this.layerElements.map((element, index) => {
            return {
              ...element,
              selected: this.selectedIndex == index,
              debug: element.type == 'selectable' || element.debug, // always true for selectable
              onclick: ((this.selectedIndex == -1 || this.selectedIndex == index) && !element.background) ?
                          e => this.select(index, e.shiftKey) :
                          () => {}
            }
          })
        }
      },
      currentSelected() {
        return this.layerElements.filter((element, index) => index == this.selectedIndex)[0];
      },
      layerElements() {
        if(this.activeLayer == 0) {
          return this.layers[0];
        }
        else {
          return [
            ...this.layers[0].map(x => {return { ...x, background: true }}),
            ...this.layers[this.activeLayer]
          ];
        }
      },
      layer() {
        return this.layers[this.activeLayer];
      }
    },
    created: function() {
      document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
      document.removeEventListener('keyup', this.escapeKeyListener);
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    background-color: white !important;
  }

  .workspace {
    display: flex;
    flex-direction: row;

    & > * {
      height: calc(100vh - 70px);
    }

    .wide {
      flex: 1;
    }

    .vertical {
      display: flex;
      flex-direction: column;
    }
  }
</style>
