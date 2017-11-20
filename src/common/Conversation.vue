<template>
  <div class="conversation" @click="skip()">
    <div class="conversation-text">
      <div v-for="(text, textIndex) in texts"
        class="text-bubble-container"
        :class="{ mine: text.from == 'me', theirs: text.from == 'them', label: text.from == 'label', decision: text.from == 'decision', cleared: textIndex == clearIndex }">
        <div class="text-bubble" v-if="text.from != 'decision'">
          {{ text.text }}
        </div>
        <div class="choice" v-for="(choice, choiceIndex) in text.decisions" v-if="text.from == 'decision'" @click="addToInitials(choice.initials)">
          {{ alphabet[choiceIndex] }}) {{ choice.label }}
        </div>
      </div>
    </div>
    <div class="conversation-footer">
      <div class="conversation-bubble" :style="{ backgroundImage: speakerImage }"></div>
      <router-link :to="continueDest" class="continue-button" v-if="complete">{{ continueText }}</router-link>
      <div class="conversation-bubble" :style="{ backgroundImage: playerImage }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Conversation',
    props: ['conversationTree', 'continueText', 'continueDest'],
    data() {
      return {
        texts: [],
        complete: false,
        clearIndex: -1,
        currentTextBuffer: '',
        textDelay: 30,
        alphabet: ['a', 'b', 'c'],
        currentTree: {}
      }
    },
    mounted() {
      this.currentTree = this.conversationTree;
      this.nextStep();
    },
    methods: {
      addMessage(data) {
        this.texts.push(
          { from: data.from, text: '' }
        );
        this.currentTextBuffer = data.text;
        if(!!data.effect) data.effect();
        setTimeout(() => this.addCharacter(), this.textDelay);
      },
      addCharacter() {
        this.texts[this.texts.length - 1].text += this.currentTextBuffer.charAt(0);
        this.currentTextBuffer = this.currentTextBuffer.substr(1);

        if(!!this.currentTextBuffer.length) {
          setTimeout(() => this.addCharacter(), this.textDelay);
        }
        else {
          this.clearIndex = this.texts.length - 1;
          setTimeout(() => this.nextStep(), 400);
        }
      },
      addToInitials(data) {
        this.currentTree.initials.push(...data);
        this.currentTree.decisions = [];
        this.texts.pop();
        this.nextStep();
      },
      nextStep() {
        if(!!this.currentTree.initials.length) {
          const newMessage = this.currentTree.initials.shift();
          this.addMessage(newMessage, this.nextStep);
        }
        else if(!!this.currentTree.decisions.length) {
          this.texts.push(
            { from: 'decision', decisions: this.currentTree.decisions }
          )
        }
        else if(!!this.currentTree.finals.length) {
          const newMessage = this.currentTree.finals.shift();
          this.addMessage(newMessage, this.nextStep);
        }
        else {
          this.complete = true;
        }
      },
      skip() {
        this.texts[this.texts.length - 1].text += this.currentTextBuffer;
        this.currentTextBuffer = '';
      }
    },
    computed: {
      speakerImage() {
        return 'url(' + require('../assets/mom-speech.png') + ')';
      },
      playerImage() {
        return 'url(' + require('../assets/player-speech.png') + ')';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .conversation {
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    user-select: none;

    .conversation-text {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 150px;
      margin-top: -999px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .text-bubble-container {
        display: flex;

        &:last-of-type {
          align-items: center;
          height: 150px;

          &.cleared {
            align-items: baseline;
            height: auto;
            margin-bottom: 150px;
            transition: 250ms height 100ms, 100ms margin-bottom 0ms;
          }
        }

        &.mine {
          justify-content: flex-end;

          .text-bubble {
            background-color: #ecf0f1;
          }
        }

        &.theirs {
          justify-content: flex-start;

          .text-bubble {
            background-color: #68c2ff;
          }
        }

        &.label {
          justify-content: center;

          .text-bubble {
            max-width: 80%;
            text-align: center;
            margin: 32px 0;
          }
        }

        &.decision {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .choice {
            background-color: white;
            width: 60%;
            padding: 16px;
            transition: 250ms all;
            cursor: pointer;

            &:hover {
              background-color: #71eda6;
            }
          }
        }

        .text-bubble {
          max-width: 60%;
          padding: 16px;
          border-radius: 5px;
          margin: 4px 0;
        }
      }
    }

    .conversation-footer {
      background-color: #bdc3c7;
      height: 150px;
      display: flex;
      flex-direction: row;
      padding: 16px;
      align-items: center;
      justify-content: space-between;

      .continue-button {
         text-align: center;
         background-color: white;
         color: black;
         z-index: 999;
         padding: 16px;
      }

      .conversation-bubble {
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50px;
        background-position: center;
        background-size: cover;
      }
    }
  }
</style>
