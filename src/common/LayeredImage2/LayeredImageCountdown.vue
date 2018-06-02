<template>
  <div
    class="layered-image-countdown"
    :style="{ top: y, left: x }"
    :class="{ clickable: !!onclick, selected: selected }"
    @click.stop="click($event)">{{ text }}</div>
</template>

<script>
  export default {
    name: 'LayeredImageCountdown',
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
  .layered-image-countdown {
    position: absolute;
    font-family: 'VT323';
    font-size: 32px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 8px 16px;
    user-select: none;
    white-space: pre;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    color: white;
    z-index: 9999;

    &.clickable {
      cursor: pointer;
    }

    &.selected {
      border: 5px solid rgba(255, 0, 0, 0.4);
    }
  }
</style>
