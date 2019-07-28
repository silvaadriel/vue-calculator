import Vue from 'vue';
import App from './App.vue';

import './sass/global.sass';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
