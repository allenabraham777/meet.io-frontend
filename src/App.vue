<template>
  <div id="app">
    <div class="mic-container">
      <SpeechToText @speech="onSpeechReceived($event)"/>
    </div>
    <div class="text-container">
      <div class="logo-wrapper">
        <img src="@/assets/logo.svg" class="logo">
      </div>
      <form style="text-align:center;" action = "/hello" method = "post" enctype="multipart/form-data">  
        <div class="text-wrapper">
          <textarea class="identified-text" name="speech" v-model="speech" readonly></textarea>
        </div>
        <div class="summerize-wrapper">
          <button type="submit" class="summerize-btn">Summerize</button>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
// import { SpeechToText } from 'vue-voice';
import SpeechToText from './lib/components/SpeechToText.vue';

export default {
    name: 'app',
    components: {
        SpeechToText
    },
    data() {
        return {
            speech: ''
        };
    },
    methods: {
        onSpeechReceived(speech) {
            console.log('Reveived', speech);
            this.speech = speech;
        }
    }
};
</script>

<style>
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
  }
  #app {
    display: flex;
    flex-direction: row;
  }
  .mic-container {
    width: 50%;
    height: 100vh;
    display: flex;
    direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .text-container{
    width: 50%;
    display: flex;
    background: #173F5F;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    height: 5rem;
    margin: 2rem;
  }
  .logo-wrapper{
    width: 100%;
    text-align: right;
  }
  .identified-text {
    resize: none;
    padding: 3rem;
    width: 40rem;
    height: 40rem;
    background: none;
    border: solid 2px #ffffff;
    color: #ffffff;
    font-size: 2rem;
  }
  .summerize-btn {
    margin: 5rem;
    background: none;
    height: 5rem;
    width: 20rem;
    font-size: 2rem;
    color: #ffffff;
    border: solid 2px #ffffff;
    border-radius: 2.5rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .summerize-btn:hover {
    color: #173F5F;
    background: #ffffff;
  }
</style>
