import Vue from 'vue';
import Vuex from 'vuex';
import another from './home/another';
import heading from './home/heading';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        another,
        heading,
    },
});
