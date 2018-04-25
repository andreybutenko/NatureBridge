<template>
  <div class="element-selector">
    <ElementSelectorItem
      v-for="item in items"
      :name="item.name"
      :imageUrl="item.data.source"
      :onclick="addElement"
      :data="item.data"
      :key="item.name" />
  </div>
</template>

<script>
  import ElementSelectorItem from './ElementSelectorItem';
  export default {
    name: 'ElementSelector',
    props: ['addElement'],
    components: {
      ElementSelectorItem
    },
    methods: {
      test() {
        alert('hi')
      }
    },
    data() {
      return {
        items: [
          {
            name: 'person-ranger',
            data: {
              type: 'sprite',
              source: 'characters/ranger.png',
              top: '0%',
              left: '0%',
              size: '30%',
              flip: false
            }
          },
          {
            name: 'person-kid',
            data: {
              type: 'sprite',
              source: 'characters/player.png',
              top: '0%',
              left: '0%',
              size: '20%',
              flip: false
            }
          },
          {
            name: 'person-weeders',
            data: {
              type: 'sprite',
              source: 'characters/weeders.png',
              top: '0%',
              left: '0%',
              size: '20%',
              flip: false
            }
          },
          {
            name: 'Label',
            data: {
              type: 'label',
              text: 'Label Text',
              top: '0%',
              left: '0%'
            }
          },
          {
            name: 'Chat bubble',
            data: {
              type: 'chat',
              text: 'Chat Text',
              top: '0%',
              left: '0%',
              flip: false
            }
          },
          {
            name: 'Squirrel Trivia',
            data: {
              type: 'sprite',
              source: 'squirrel.png',
              top: '0%',
              left: '0%',
              size: '8%',
              dancing: true
            }
          },
          {
            name: 'Clickable',
            data: {
              type: 'selectable',
              top: '0%',
              left: '0%',
              width: '20%',
              height: '20%',
              layerTarget: -1
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .element-selector {
    max-width: 300px;
    background-color: #dfe6e9;
    overflow-y: scroll;
  }
</style>
