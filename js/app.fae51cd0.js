(function(e){function t(t){for(var i,s,c=t[0],a=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/meet.io-frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},1038:function(e,t,n){e.exports=n.p+"img/stop.10314f35.svg"},"1a61":function(e,t,n){e.exports=n.p+"img/mic.2355f3f9.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"mic-container"},[n("div",{staticClass:"meet-io"},[e._v("meet.io")]),n("div",{staticStyle:{height:"70%"}},[n("SpeechToText",{on:{speech:function(t){e.onSpeechReceived(t)}}})],1)]),n("div",{staticClass:"text-container"},[e._m(0),n("form",{staticStyle:{"text-align":"center"},attrs:{action:"https://just-for-fun-shit.herokuapp.com/hello",method:"post",enctype:"multipart/form-data"}},[n("div",{staticClass:"text-wrapper"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.speech,expression:"speech"}],staticClass:"identified-text",attrs:{id:"speech",name:"speech",readonly:""},domProps:{value:e.speech},on:{input:function(t){t.target.composing||(e.speech=t.target.value)}}})]),e._m(1)])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo-wrapper"},[i("img",{staticClass:"logo",attrs:{src:n("9b19")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summerize-wrapper"},[n("button",{staticClass:"summerize-btn",attrs:{type:"submit"}},[e._v("Summerize")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"SpeechToText"}},[n("div",{staticClass:"speech-to-text",class:{"speech-to-text__button--speaking":e.isSpeaking},on:{click:function(t){e.onClick()}}},[n("div",{staticClass:"speech-to-text-1"},[n("div",{staticClass:"speech-to-text-2"},[n("div",[e.isSpeaking?e._e():n("img",{staticClass:"mic-img",attrs:{src:e.micImage}}),e.isSpeaking?n("img",{staticClass:"mic-img",attrs:{src:e.stopImage}}):e._e()])])])])])},c=[],a=n("d225"),u=n("b0b4"),l=n("2bd2"),p=p||webkitSpeechRecognition,f=0,h=function(){function e(){var t=this;Object(a["a"])(this,e),this.recognition=new p,this.result="created",this.resultSubject=new l["a"],this.recognition.continuous=!0,this.recognition.lang="en-EN",this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=function(e){console.log("Event",e);var n=e.results.length-1;t.result=e.results[n][0].transcript,console.log("Confidence: ".concat(e.results[0][0].confidence),t.result),t.resultSubject.next(t.result)},this.recognition.onspeechend=function(){console.log("Speech end"),t.resultSubject.next("")},this.recognition.onnomatch=function(){console.log("I didn't recognise that colors.")},this.recognition.onerror=function(e){console.log("Error occurred in recognition: ".concat(e.error)),t.resultSubject.error("Error occurred in recognition: ".concat(e.error))}}return Object(u["a"])(e,[{key:"speak",value:function(){if(this.recognition.start(),0===f)return this.resultSubject}},{key:"stopspeak",value:function(){this.recognition.stop(),this.resultSubject.next("end"),f=1}}]),e}(),d=n("1a61"),g=n.n(d),m=n("1038"),v=n.n(m),b={name:"SpeechToText",data:function(){return{isSpeaking:!1,speech:"",speechService:{},micImage:g.a,stopImage:v.a}},methods:{onClick:function(){var e=this;!1===this.isSpeaking?(this.isSpeaking=!0,this.speechService.speak().subscribe((function(t){e.speech=t,"end"===t?e.isSpeaking=!1:e.$emit("speech",e.speech)}),(function(t){console.log("Error",t),e.isSpeaking=!1}),(function(){e.isSpeaking=!1})),console.log("speechService started")):this.speechService.stopspeak()}},props:{msg:String},created:function(){this.speechService=new h}},S=b,x=(n("febe"),n("2877")),k=Object(x["a"])(S,s,c,!1,null,null,null),y=k.exports,_={name:"app",components:{SpeechToText:y},data:function(){return{speech:""}},methods:{onSpeechReceived:function(e){this.speech+=e}}},j=_,w=(n("034f"),Object(x["a"])(j,o,r,!1,null,null,null)),C=w.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.02241780.svg"},febe:function(e,t,n){"use strict";var i=n("fff8"),o=n.n(i);o.a},fff8:function(e,t,n){}});
//# sourceMappingURL=app.fae51cd0.js.map