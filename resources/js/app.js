import store from './store/index';
import { VueSpinners } from '@saeris/vue-spinners'

require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('post-comment', require('./components/PostComment.vue').default);
Vue.component('post-comment', ()=> import('./components/PostComment'));

Vue.use(VueSpinners);

const app = new Vue({
    el: '#app',
    store
});
