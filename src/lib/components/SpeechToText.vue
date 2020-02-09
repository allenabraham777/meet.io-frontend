<template>
  <div id="SpeechToText">
    <!-- eslint-disable -->
    <div class="speech-to-text" @click="onClick()" :class="{ 'speech-to-text__button--speaking': isSpeaking }">
      <div class="speech-to-text-1">
        <div class="speech-to-text-2">
          <div>
              <img class="mic-img" v-if="!isSpeaking" :src="micImage">
              <img v-if="isSpeaking"
                 class="mic-img" :src="stopImage">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpeechToText from '../services/speech-to-text';
import micImage from '../../assets/mic.svg';
import stopImage from '../../assets/stop.svg';
// const micImage = require('../../assets/mic.svg');
// const stopImage = require('../../assets/stop.svg');

/*
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars

*/


export default {
    name: 'SpeechToText',
    data() {
        return {
            isSpeaking: false,
            speech: '',
            speechService: {},
            micImage,
            stopImage
        };
    },
    methods: {
        onClick() {
          if(this.isSpeaking === false) {

            this.isSpeaking = true;
            this.speechService.speak().subscribe(
              (result) => {
                this.speech = result;
                if (result === 'end'){
                  this.isSpeaking = false;
                }
                else{
                  this.$emit('speech', this.speech);
                }
                    // console.log('Result', result);
                },
                (error) => {
                  console.log('Error', error);
                    this.isSpeaking = false;
                },
                () => {
                  this.isSpeaking = false;
                }
            );
            console.log('speechService started');
          }
          else{
            this.speechService.stopspeak();
          }
        }
    },
    props: {
        msg: String
    },
    created() {
        this.speechService = new SpeechToText();
    }
};
</script>
<style>
.speech-to-text,.speech-to-text-1,.speech-to-text-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
}

.mic-img {
  width: 5rem;
}

.speech-to-text:hover,.speech-to-text-1:hover,.speech-to-text-2:hover {
  transform: scale(1.1);
}

.speech-to-text {
  background: #3CAEA3;
  width: 30em;
  height: 30em;
}

.speech-to-text-1 {
  background: #76BBB4;
  width: 20em;
  height: 20em;
}

.speech-to-text-2 {
  background: #C0F4EF;
  width: 10em;
  height: 10em;
}
</style>
