<template>
  <div class="wave-goodbye">
    <div class="content">
      <h1>Congratulations!</h1>
      <p>You completed your National Park Adventure! You are now a Deputy Ranger!</p>
      <img class="ranger-badge" src="/static/badges/deputy_ranger.png" />
      <p>You also earned {{earnedBadges}} out of {{totalBadges}} additional badges!</p>
      <div class="badge-container">
        <div v-for="(badge, i) in badges">
          <img :src="getSrc(badge)" />
          <span>{{humanBadges[i]}}</span>
        </div>
      </div>
      <div class="continue-btn" @click="showScrapbook">
        Review your adventure
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'End',
    props: ['showScrapbook'],
    data() {
      return {
        badges: ['forest_health', 'species_protector', 'wilderness_preparedness', 'park_trivia'],
        humanBadges: ['Forest Health', 'Species Protector', 'Wilderness Preparedness', 'Park Trivia']
      }
    },
    methods: {
      getSrc(badge) {
        const fileName = globalStore.hasBadge(badge) ? badge : 'blank';
        return '/static/badges/' + fileName + '.png';
      }
    },
    computed: {
      earnedBadges() {
        return this.badges.filter(badge => globalStore.hasBadge(badge)).length;
      },
      totalBadges() {
        return this.badges.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wave-goodbye {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('/static/misc/welcome-bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: scroll;
    margin: 0;

    .content {
      background-color: #ffffff;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 800px;
      padding: 16px;
      text-align: center;

      .ranger-badge {
        padding: 32px 0;
        width: 300px;
        max-width: 100%;
      }

      .badge-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        div {
          flex: 1;
        }

        img,
        span {
          display: block;
        }
      }

      .continue-btn {
        padding: 16px;
        text-align: center;
        color: white;
        cursor: pointer;
        background-color: #27ae60;
        transition: all 250ms;
        margin-top: 16px;
        width: 100%;

        &:hover {
          background-color: #2ecc71;
        }
      }
    }
  }
</style>
