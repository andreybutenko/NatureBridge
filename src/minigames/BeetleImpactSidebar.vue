<template>
  <div class="step-generator" v-if="!!layerStep">
    <div class="btn" v-if="layerStep.stepType == 'Click through'" @click="takeStep()">Next</div>
    <template v-else>
      <div class="label" v-if="!!layerStep.prompt">{{ layerStep.prompt }}</div>
      <div class="btn" v-for="(option, i) in layerStep.options" @click="takeStep(i)">
        {{ option.description }}
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'BeetleImpactSidebar',
    props: ['takeStep', 'layerStep']
  }
</script>

<style lang="scss" scoped>
</style>
