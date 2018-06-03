<template>
  <div
    class="layered-image-label"
    :style="{ top: y, left: x }"
    :class="{ clickable: !!onclick, selected: selected }"
    @click.stop="click($event)">{{ text }}</div>
</template>

<script>
  export default {
    name: 'LayeredImageLabel',
    props: ['x', 'y', 'onclick', 'text', 'selected'],
    methods: {
      click(e) {
        if(!!this.onclick) {
          this.onclick(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $orientation-break: 600px;
  .layered-image-label {
    position: absolute;
    font-family: 'VT323';
    font-size: 2vw;
    background-color: #cdcccc;
    border: 5px solid black;
    text-align: center;
    padding: 8px 16px;
    user-select: none;
    white-space: pre-wrap;

    @media only screen and (max-width: $orientation-break) {
      font-size: 2.5vw;
    }

    &.clickable {
      cursor: pointer;
    }

    &.selected {
      border: 5px solid rgba(255, 0, 0, 0.4);
    }
  }
</style>
