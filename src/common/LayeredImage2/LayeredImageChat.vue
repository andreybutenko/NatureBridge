<template>
  <div
    class="layered-image-chat"
    :style="{ top: y, left: x }"
    :class="{ clickable: !!onclick, selected: selected, flip: flip }"
    @click.stop="onclick($event)">{{ text }}<img class="chat-tail" src="/NatureBridge/static/ui/chat-tail.png" />
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageChat',
    props: ['x', 'y', 'onclick', 'flip', 'text', 'selected'],
    methods: {
      click() {
        if(!!this.onclick) {
          this.onclick();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image-chat {
    position: absolute;
    font-family: 'VT323';
    font-size: 32px;
    background-color: white;
    border: 5px solid black;
    border-radius: 20px;
    text-align: center;
    padding: 8px 16px;
    user-select: none;
    white-space: pre;

    &.clickable {
      cursor: pointer;
    }

    &.selected {
      border: 5px solid rgba(255, 0, 0, 0.4);
    }

    &.flip .chat-tail {
      left: initial;
      right: 0;
      transform: scale(-0.5, 0.5) translateY(-50%);
    }

    .chat-tail {
      position: absolute;
      top: 100%;
      left: 0;
      transform: scale(0.5) translateY(-50%);
    }
  }
</style>
