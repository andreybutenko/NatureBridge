// https://unsplash.com/photos/BmeqsTLE75w
<template>
  <div class="welcome">
    <div class="welcome-modal-container" :style="{ marginLeft: offset }">
      <div class="welcome-modal">
        <div class="title">
          National Park Adventure
        </div>
        <div class="content">
          <p>Welcome to the National Park Adventure game! Journey through the park to explore all the trails and earn your Deputy Ranger status. Are you ready to:</p>
          <ul>
            <li>Learn about the amazing plants, animals, and land that make up national parks?</li>
            <li>Explore cultural and historical places?</li>
            <li>Have fun while safely enjoying your beautiful surroundings?</li>
          </ul>
        </div>
        <div class="action">
          <div class="welcome-btn" @click="next">
            Begin Game!
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
          National Park Service
        </div>
        <div class="content">
          <p>What is the National Park Service and why does it exist?</p>
          <p>The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.</p>
          <p>No matter where you are, there is so much to explore nearby. All you need to do is pick a destination and get outside!</p>
        </div>
        <div class="action">
          <div class="welcome-btn" @click="next">
            Let's head to the Park
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
