import { Commit } from 'vuex';
const state = {
    bigHeadingShow: true,
};

const getters = {
    bigHeadingShow: () => state.bigHeadingShow,
};

const mutations = {
    saveBigHeadingShowTrue(states) {
        states.bigHeadingShow = true;
    },
    saveBigHeadingShowFalse(states) {
        states.bigHeadingShow = false;
    }
};
const actions = {
    async bigHeadingShowTrue(context, data) {
        context.commit('saveBigHeadingShowTrue');
    },
    async bigHeadingShowFalse(context, data) {
        context.commit('saveBigHeadingShowFalse');
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
