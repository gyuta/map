import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBaulUbuSc8UlDbqU41n5kl-KBKYRyTkIE",
  authDomain: "one-time-map.firebaseapp.com",
  databaseURL: "https://one-time-map.firebaseio.com",
  projectId: "one-time-map",
  storageBucket: "one-time-map.appspot.com",
  messagingSenderId: "1029387231473",
  appId: "1:1029387231473:web:9e3b4e365438d711438950",
  measurementId: "G-BVV21DPSLC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
