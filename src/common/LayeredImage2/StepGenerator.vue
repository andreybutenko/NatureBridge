<template>
  <div class="step-container" v-if="!!layerStep">
    <div class="btn" v-if="layerStep.stepType == 'Click through'" @click="takeStep()">Next</div>
    <template v-else>
      <div>{{ layerStep.prompt }}</div>
      <div class="btn" v-for="(option, i) in layerStep.options" @click="takeStep(i)">
        {{ option.description }}
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'StepGenerator',
    props: ['takeStep', 'layerStep']
  }
</script>

<style lang="scss" scoped>
  .step-container {
    .btn {
      background-color: #dfe6e9;
      border: 1px solid #636e72;
      text-align: center;
      padding: 8px;
      cursor: pointer;
      font-size: 18px;
      transition: 250ms all;

      &:hover {
        background-color: #74b9ff;
      }
    }
  }
</style>
