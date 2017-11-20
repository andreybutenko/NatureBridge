<template>
  <div class="container narrow">
    <div>
      <p>Welcome to NatureBridge! You have claimed your camp bed, rolled out your sleeping bag, and grabbed a snack from the dining hall. What would you like to do?</p>

      <router-link to="Cabin">Visit your cabin</router-link>
      <router-link to="TrailGame">Go for a hike</router-link>
      <router-link to="RangerStation">Enter the ranger station</router-link>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'CampHub',
    mounted() {
      globalStore.visitLocation('CampHub');
    }
  }
</script>

<style lang="scss">
</style>
