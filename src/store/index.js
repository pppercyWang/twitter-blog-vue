import Vue from 'vue';
import Vuex from 'vuex';
import heading from './home/heading';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        heading,
    },
});
