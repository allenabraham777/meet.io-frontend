/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import { Subject } from 'rxjs';

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
let stop = 0;
export default class SpeechToText {
    constructor() {
        this.recognition = new SpeechRecognition();
        this.result = 'created';
        this.resultSubject = new Subject();

        this.recognition.continuous = true;

        this.recognition.lang = 'en-EN';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event) => {
            console.log('Event', event);

            const last = event.results.length - 1;
            this.result = event.results[last][0].transcript;

            console.log(`Confidence: ${event.results[0][0].confidence}`, this.result);
            this.resultSubject.next(this.result);
        };

        this.recognition.onspeechend = () => {
            console.log('Speech end');
            this.resultSubject.next('');
        };

        this.recognition.onnomatch = () => {
            console.log("I didn't recognise that colors.");
        };

        this.recognition.onerror = (event) => {
            console.log(`Error occurred in recognition: ${event.error}`);
            this.resultSubject.error(`Error occurred in recognition: ${event.error}`);
        };
    }
    speak() {
        this.recognition.start();
        if (stop === 0)
            return this.resultSubject;
    }
    stopspeak() {
        this.recognition.stop();
        this.resultSubject.next('end');
        stop = 1;
    }
}
