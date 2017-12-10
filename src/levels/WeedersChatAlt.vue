<template>
  <div class="container">
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :characterSprite="require('../assets/weeder-speech.png')" />
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import Conversation from '../common/Conversation';

  export default {
    name: 'WeedersChat',
    components: { Conversation },
    data() {
      return {
        composing: false,
        conversationTree: [
          { from: 'label', text: 'You go up to the weeders.' },
          {
            from: 'them',
            text: 'Hey, do you want to help us weed Stinky Bob? We\'ll give you a bucket and a shovel so you can pick anywhere!'
          },
          {
            from: 'decision',
            choices: [
              {
                label: 'Sure!',
                effect: () => {
                  globalStore.setAttr('weedersHelped', true);
                  this.conversationTree.unshift(
                    {
                      from: 'me',
                      text: 'Sure!'
                    },
                    {
                      from: 'label',
                      text: 'You join the weeders, and pick some stinky bob with them.',
                      effect: () => {
                        globalStore.addItem('bucket')
                      }
                    },
                    {
                      from: 'them',
                      text: 'Thanks for your help! Here, take this shovel: you can pick stinky bob wherever you come across it now.',
                      effect: () => {
                        globalStore.addItem('shovel')
                      }
                    },
                    {
                      from: 'me',
                      text: 'Thank you! I definately will.'
                    },
                    {
                      from: 'label',
                      text: 'You go.',
                      effect: () => this.$router.push('WeedersAlt')
                    }
                  );
                }
              },
              {
                label: 'No thanks',
                effect: () => {
                  this.conversationTree.unshift(
                    {
                      from: 'me',
                      text: 'No thanks.'
                    },
                    {
                      from: 'them',
                      text: 'Okay, see you!'
                    },
                    {
                      from: 'label',
                      text: 'You go.',
                      effect: () => this.$router.push('WeedersAlt')
                    }
                  );
                }
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
