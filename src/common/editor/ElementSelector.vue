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
            name: 'Main Character',
            data: {
              type: 'sprite',
              source: 'characters/main-character.png',
              top: '0%',
              left: '0%',
              size: '35%',
              flip: false
            }
          },
          {
            name: 'Brown Jacket Kid',
            data: {
              type: 'sprite',
              source: 'characters/brown-jacket-kid.png',
              top: '0%',
              left: '0%',
              size: '35%',
              flip: false
            }
          },
          {
            name: 'Green Jacket Kid',
            data: {
              type: 'sprite',
              source: 'characters/green-jacket-kid.png',
              top: '0%',
              left: '0%',
              size: '35%',
              flip: false
            }
          },
          {
            name: 'Green Poncho Kid',
            data: {
              type: 'sprite',
              source: 'characters/green-poncho-kid.png',
              top: '0%',
              left: '0%',
              size: '35%',
              flip: false
            }
          },
          {
            name: 'Pink Jacket Kid',
            data: {
              type: 'sprite',
              source: 'characters/pink-jacket-kid.png',
              top: '0%',
              left: '0%',
              size: '35%',
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
