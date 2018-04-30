<template>
  <div class="element-editor-item">
    <span class="property">{{ property }}</span>
    <span class="value" v-if="type == 'readonly'">{{ value }}</span>
    <span class="value" v-if="type == 'percent-text'">
      <input type="text" :value="removePercent(value)" @input="setElementProperty(property, $event.target.value + '%')">
    </span>
    <span class="value" v-if="type == 'text'">
      <input type="text" :value="value" @input="setElementProperty(property, $event.target.value)">
    </span>
    <span class="value" v-if="type == 'multiline-text'">
      <textarea type="text" :value="value" @input="setElementProperty(property, $event.target.value)" />
    </span>
    <span class="value" v-if="type == 'slider'">
      <input type="range" min="1" max="100" :value="removePercent(value)" @input="setElementProperty(property, $event.target.value + '%')">
    </span>
    <span class="value" v-if="type == 'checkbox'">
      <input type="checkbox" :checked="value" @click="setElementProperty(property, !!$event.target.checked)">
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ElementSelectorItem',
    props: ['setElementProperty', 'property', 'value'],
    computed: {
      type() {
        if(this.property == 'type' || this.property == 'source') {
          return 'readonly';
        }
        else if(this.property == 'size' || this.property == 'width' || this.property == 'height') {
          return 'slider';
        }
        else if(typeof this.value == 'boolean') {
          return 'checkbox';
        }
        else if(this.property == 'top' || this.property == 'left') {
          return 'percent-text';
        }
        else if(this.property == 'text') {
          return 'multiline-text';
        }
        else {
          return 'text';
        }
      }
    },
    methods: {
      log(e) {
        console.log(e)
      },
      removePercent(str) {
        return str.slice(0, -1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .element-editor-item {
    display: flex;
    .property {
      flex: 1 0 33%;
    }
    .value {
      flex: 1 0 66%;
    }
  }
</style>
