<template>
  <div class="editor">
    <Toolbar :showSource="showSource" />
    <div class="workspace">
      <ElementSelector :addElement="addElement" />
      <SceneGenerator :scene="sceneProcessed" />
      <ElementEditor
        :setElementProperty="setElementProperty"
        :index="selectedIndex"
        :element="currentSelected" />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Toolbar from './common/editor/Toolbar';
  import ElementSelector from './common/editor/ElementSelector';
  import SceneGenerator from './common/LayeredImage2/SceneGenerator';
  import ElementEditor from './common/editor/ElementEditor';

  export default {
    name: 'Editor',
    components: {
      Toolbar,
      ElementSelector,
      SceneGenerator,
      ElementEditor
    },
    data() {
      return {
        selectedIndex: -1,
        offsetX: 0,
        offsetY: 0,
        canvasWidth: 0,
        canvasHeight: 0,
        drag: false,
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
          elements: []
        }
      }
    },
    methods: {
      select(index, drag) {
        this.selectedIndex = index;
        this.drag = drag;
      },
      addElement(data) {
        this.scene.elements.push(data);
      },
      setElementProperty(property, value) {
        this.currentSelected[property] = value;
      },
      showSource() {
        window.open('', null, 'status=yes,toolbar=no,menubar=no,location=no').document.write('<pre>' + JSON.stringify(this.scene, null, 2) + '</pre>');
      }
    },
    computed: {
      sceneProcessed() {
        return {
          ...this.scene,
          onclick: () => {
            this.selectedIndex = -1;
            this.drag = false;
          },
          elements: this.scene.elements.map((element, index) => {
            return {
              ...element,
              selected: this.selectedIndex == index,
              onclick: (this.selectedIndex == -1 || this.selectedIndex == index) ?
                          e => this.select(index, e.ctrlKey) :
                          () => {}
            }
          })
        }
      },
      currentSelected() {
        return this.scene.elements.filter((element, index) => index == this.selectedIndex)[0];
      }
    },
    watch: {
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
      flex: 1;
      height: calc(100vh - 70px);
    }
  }
</style>
