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
          'basecamp_final.png',
          'basecamp_final_hr.jpg',
          'beetle_impact.png',
          'beetle_impact_hr.jpeg',
          'campfire.png',
          'campfire_hr.jpeg',
          'dispose_waste.png',
          'dispose_waste_hr.jpeg',
          'fish-trapped-bg.png',
          'landslide.png',
          'landslide_hr.jpeg',
          'no_music.png',
          'no_music_hr.jpeg',
          'old_mill.png',
          'old_mill_hr.png',
          'old_mill_river.png',
          'pickaxe.png',
          'pickaxe_hr.jpeg',
          'ranger-inside.png',
          'salmon_hr.jpg',
          'salmon-01.png',
          'salmon_final-01.png',
          'trail-cabins.jpg',
          'washed_out_bridge.png',
          'washed_out_bridge_hr.jpeg',
          'weeders-bg.png',
          'weeders_px-01.png',
          'weeders_hr.jpeg'
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
