import Vue from 'vue';
import App from './components/App.vue';
import apolloProvider from './apollo';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount('#app');
