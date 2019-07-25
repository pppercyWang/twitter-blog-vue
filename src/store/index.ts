import Vue from 'vue';
import Vuex from 'vuex';
import another from './home/another';
import book from './home/book';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        another,
        book,
    },
});
