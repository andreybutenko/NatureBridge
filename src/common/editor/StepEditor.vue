<template>
  <div class="step-editor" v-if="index > 0">
    <b>Step Type</b>
    <div>
      <input type="radio" id="click-through" value="Click through" v-model="stepType">
      <label for="click-through">Click through</label>
      <br>
      <input type="radio" id="decision" value="Decision" v-model="stepType">
      <label for="decision">Decision</label>
    </div>
    <div v-if="stepType == 'Decision'">
      <div class="prompt-container">
        <label for="prompt-text">Prompt:</label>
        <input id="prompt-text" v-model="prompt">
      </div>
      <div class="option-container" v-for="(option, i) in options">
        <div class="description-container">
          <label>Description:</label>
          <input v-model="option.description">
        </div>
        <div class="layer-container">
          <label>Layer:</label>
          <input v-model="option.layer" type="number">
        </div>
        <div class="control-container">
          <div class="remove" @click="options.splice(i, 1)">X</div>
        </div>
      </div>
      <span class="add" @click="options.push({layer: 1})">Add Another Option</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StepEditor',
    props: ['onUpdate', 'data'],
    data() {
      return {
        index: -1,
        stepType: 'Click through',
        prompt: 'You respond with:',
        options: []
      }
    },
    watch: {
      stepType() {
        this.onUpdate(this.stepType, this.prompt, this.options);
      },
      prompt() {
        this.onUpdate(this.stepType, this.prompt, this.options);
      },
      options() {
        this.onUpdate(this.stepType, this.prompt, this.options);
      },
      data() {
        if(this.index != this.data.index) {
          this.index = this.data.index;
          this.stepType = this.data.stepType;
          this.prompt = this.data.prompt;
          this.options = this.data.options;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .step-editor {
    width: 300px;
    background-color: #dfe6e9;
    max-height: 300px;
    padding: 0.5em 8px;
    border-bottom: 1px solid black;

    input:not([type="radio"]) {
      font-size: 14px;
      width: 100%;
    }

    .prompt-container,
    .option-container {
      padding-top: 8px;

      label,
      input {
        display: block;
      }

      label {
        font-size: 12px;
      }
    }

    .option-container {
      display: flex;
      flex-direction: row;
      padding-bottom: 8px;

      .description-container {
        flex: 1 0;
      }

      .layer-container,
      .control-container {
        flex: 0 1 40px;
      }

      .control-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .remove {
          background-color: #d63031;
          padding: 2px 8px;
          color: white;
          cursor: pointer;

          &:hover {
            background-color: #ff7675;
          }
        }
      }
    }

    .add {
      display: block;
      margin-top: 0.5em;
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
