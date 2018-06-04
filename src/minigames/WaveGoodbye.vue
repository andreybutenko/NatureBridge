<template>
  <div class="wave-goodbye">
    <div class="content">
      <h1>Tell someone where you're going!</h1>
      <img src="/static/characters/mom-wave.png" />
      <p>
        Don’t forget to let someone know your plan. Tell them where you’re going and when you expect to be back!
      </p>
      <div class="continue-btn" @class="switchScene('Intro1')">
        Head to the Park
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WaveGoodbye',
    props: ['switchScene']
  }
</script>

<style lang="scss" scoped>
  .wave-goodbye {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3498db;

    .content {
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 400px;
      padding: 16px;
      text-align: center;

      img {
        padding: 32px 0;
        width: 300px;
        max-width: 100%;
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
