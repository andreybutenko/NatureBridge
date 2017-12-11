<template>
  <div class="container">
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :continueText="continueText" :continueDest="continueDest" />
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import Conversation from '../common/Conversation';

  export default {
    name: 'TrailHead',
    components: { Conversation },
    mounted() {
      globalStore.visitLocation('TrailHead');
    },
    data() {
      return {
        conversationTree: [
          { from: 'label', text: 'You see a trail sign that reads "Elwha River Hike."' },
          {
            from: 'decision',
            choices: [
              {
                label: 'Go on a hike.',
                effect: () => {
                  if(globalStore.has('map')) {
                    this.$router.push('TrailCabins');
                  }
                  else {
                    this.conversationTree.unshift(
                      { from: 'label', text: 'You decide to go on the hike, but have second thoughts.' },
                      {
                        from: 'me',
                        text: 'Actually, I better not. I don\'t know the way! I should check in the ranger station.'
                      }
                    );
                  }
                }
              },
              {
                label: 'Return back.',
                effect: () => this.$router.push('CampHub')
              }
            ]
          }
        ],
        continueText: 'Walk back.',
        continueDest: 'CampHub'
      }
    }
  }
</script>

<style lang="scss">
