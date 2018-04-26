<template>
  <div class="background-editor" v-if="index == 0">
    <label for="background-select">Background:</label>
    <select id="background-select" v-model="background">
      <option v-for="name in backgrounds">{{ name }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'BackgroundEditor',
    props: ['onUpdate', 'index'],
    data() {
      return {
        background: 'base-camp.png',
        backgrounds: [
          'base-camp.png',
          'fish-trapped-bg.png',
          'ranger-inside.png',
          'trail-cabins.jpg',
          'weeders-bg.png'
        ]
      }
    },
    watch: {
      background() {
        this.onUpdate(this.background);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-editor {
    width: 300px;
    background-color: #dfe6e9;
    max-height: 300px;
    padding: 0.5em 8px;
    border-bottom: 1px solid black;

    select {
      font-size: 14px;
      width: 100%;
    }

    label {
      font-size: 12px;
    }

    label,
    select {
      display: block;
    }
  }
</style>
