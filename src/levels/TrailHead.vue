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
                  if(globalStore.has('water') && globalStore.has('whistle') && globalStore.has('map')) {
                    this.$router.push('TrailCabins');
                    return;
                  }

                  const messages = [
                    { from: 'label', text: 'You decide to go on the hike, but have second thoughts.' }
                  ];

                  if(!globalStore.has('water')) {
                    messages.push({
                      from: 'me',
                      text: 'Actually, I better not. I don\'t have any water.'
                    });
                  }
                  if(!globalStore.has('whistle')) {
                    messages.push({
                      from: 'me',
                      text: !globalStore.has('water') ?
                        '\nAnd what if I see a bear? I don\'t have a whistle.' :
                        'Actually, I better not. What if I see a bear? I don\'t have a whistle.'
                    });
                  }
                  if(!globalStore.has('map')) {
                    messages.push({
                      from: 'me',
                      text: !globalStore.has('water') || !globalStore.has('whistle') ?
                        'And I don\'t know where to go! I need a map.' :
                        'Actually, I better not. I don\'t know where to go! I need a map.'
                    });
                  }

                  this.conversationTree.unshift(...messages);
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
