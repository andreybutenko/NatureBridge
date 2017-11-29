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
      globalStore.visitLocation('BusRide');
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
                  if(globalStore.has('water') && globalStore.has('whistle') && globalStore.has('map')) {

                  }

                  if(!globalStore.has('water')) {
                    this.conversationTree.unshift(...[
                      { from: 'me', text: 'Actually, I better not. I don’t have any water.' }
                    ]);
                  }
                  if(!globalStore.has('whistle')) {
                    this.conversationTree.unshift(...[
                      { from: 'me', text: 'But what if I see a bear? I don’t have a whistle.' }
                    ]);
                  }
                  if(!globalStore.has('map')) {
                    this.conversationTree.unshift(...[
                      { from: 'me', text: 'Wait... I don\'t know where to go! I need a map.' }
                    ]);
                  }
                }
              },
              {
                label: 'Return back.'
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
