// https://unsplash.com/photos/BmeqsTLE75w
<template>
  <div class="welcome">
    <div class="welcome-modal-container" :style="{ marginLeft: offset }">
      <div class="welcome-modal">
        <div class="title">
          Welcome to the National Park Adventure Game!
        </div>
        <div class="content">
	  <p>Explore all the trails in the park to earn your <b>Deputy Ranger Badge</b>.</p>
          <p>Get ready to:</p>
          <ul>
            <li>Learn about the amazing plants, animals, and land that make up our national parks</li>
            <li>Explore impacts of climate change</li>
            <li>Have fun while safely enjoying your beautiful surroundings!</li>
          </ul>
        </div>
        <div class="action">
          <div class="welcome-btn" @click="next">
            Begin Game
          </div>
        </div>
      </div>
    </div>

    <div class="welcome-modal-container">
      <div class="welcome-modal">
        <div class="image">
          <img src="/static/misc/national-parks.jpg" />
        </div>
        <div class="title">
          Climate Change in National Parks
        </div>
        <div class="content">
          <p><b>How does climate change affect national parks?</b> Human-caused climate change affects every part of the planet. Changes in temperature and amount of rainfall are challenging for plants and animals to adapt to. These changes can even affect rivers, glaciers, and mountains!</p>
         <p><b>Why should I care about national parks?</b> National parks exist to protect important lands in this country so everyone can enjoy, learn about, and be inspired by the great outdoors. National parks belong to all of us, so we need to work together to protect them.</p>
        </div>
        <div class="action">
          <div class="welcome-btn" @click="next">
            Head to the park
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        stageId: 0,
        stages: ['intro', 'national-parks']
      }
    },
    computed: {
      stage() {
        return this.stages[this.stageId];
      },
      offset() {
        return 'calc(-' + (this.stageId * 100) + 'vw + ' + (this.stageId * 16) + 'px)';
      }
    },
    methods: {
      next() {
        this.stageId++;
        if(this.stageId >= this.stages.length) {
          this.$router.push('game');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .welcome {
    background-image: url('/static/misc/welcome-bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;

    .welcome-modal-container {
      width: 100%;
      height: 100vh;

      flex: 0 0 100%;
      padding: 8px;

      display: inline-flex;
      justify-content: center;
      align-items: center;

      transition: 250ms all;

      .welcome-modal {
        background-color: #dfe6e9;
        border-radius: 15px;
        width: 800px;
        max-width: 100%;
        margin: auto;
        overflow: hidden;

        .title {
          background-color: #74b9ff;
          padding: 16px 32px;
          font-family: 'Saira Extra Condensed', sans-serif;
          font-size: 32px;
        }

        .content {
          padding: 16px 32px;

          ul {
            li {
              margin: 5px 0;
            }
          }

          p {
            margin-bottom: 1em;
          }
        }

        .action {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 16px;

          .welcome-btn {
            display: inline-block;
            background-color: #00b894;
            color: white;
            border-radius: 15px;
            padding: 32px 64px;
            text-align: center;
            cursor: pointer;
            transition: 250ms all;

            &:hover {
              background-color: #019679;
            }
          }
        }
      }
    }
  }
</style>
