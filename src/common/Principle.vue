<template>
  <div class="principle-container" v-if="shown">
    <div class="principle">
      <h1>Leave No Trace Principle:</h1>
      <h2>{{principle}}</h2>
      <p>{{principledesc}}</p>
      <div class="btn-continue" @click="ondismiss">
        Continue
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Principle',
    props: ['registerShow', 'onComplete'],
    data() {
      return {
        principle: 'Leave No Trace',
        principledesc: 'fjkalefe',
        shown: true
      }
    },
    mounted() {
      this.registerShow(this.show);
    },
    methods: {
      show(title, desc) {
        this.principle = title;
        this.principledesc = desc;
        this.shown = true;
      },
      ondismiss() {
        this.shown = false;
        this.onComplete();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .principle-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    animation: slide-down 250ms;
    display: flex;
    justify-content: center;
    align-items: center;

    .principle {
      background-color: white;
      padding: 16px;
      width: 600px;
      max-width: 100vw;
      min-height: 200px;
      max-height: 100vh;

      h1 {
        font-size: 1em;
      }

      h2 {
        font-size: 2em;
      }

      .btn-continue {
        padding: 16px;
        text-align: center;
        color: white;
        cursor: pointer;
        background-color: #27ae60;
        transition: all 250ms;
        margin-top: 16px;

        &:hover {
          background-color: #2ecc71;
        }
      }
    }
  }

  @keyframes slide-down {
    from {
      top: -100vh;
    }
    to {
      top: 0;
    }
  }
</style>
