<template>
  <div
    class="layered-image-chat"
    :style="chatStyle"
    :class="{ clickable: !!onclick, selected: selected, flip: flip }"
    @click.stop="click($event)">{{ text }}<img class="chat-tail" src="/static/ui/chat-tail.png" />
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageChat',
    props: ['x', 'y', 'onclick', 'text', 'selected'],
    methods: {
      click(e) {
        if(!!this.onclick) {
          this.onclick(e);
        }
      }
    },
    computed: {
      chatStyle() {
        const fromBottom = `${100 - parseInt(this.y)}%`;
        if(this.flip) {
          return {
            bottom: fromBottom,
            right: `${100 - parseInt(this.x)}%`
          }
        }

        return {
          bottom: fromBottom,
          left: this.x
        }
      },
      flip() {
        return parseInt(this.x) > 50;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $orientation-break: 600px;
  .layered-image-chat {
    position: absolute;
    font-family: 'VT323';
    font-size: 2vw;
    background-color: white;
    border: 5px solid black;
    border-radius: 20px;
    text-align: center;
    padding: 8px 16px;
    user-select: none;
    white-space: pre-wrap;
    max-width: 400px;

    @media only screen and (max-width: $orientation-break) {
      font-size: 2.5vw;
    }

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
