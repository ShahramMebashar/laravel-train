import Vue from 'vue';
import Vuex from 'vuex';
import Comment from './modules/comment/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Comment
    }
});

export default store;
