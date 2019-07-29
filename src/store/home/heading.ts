import { Commit } from 'vuex';
const state: any = {
    bigHeadingShow: true,
};

const getters: any = {
    bigHeadingShow: () => state.bigHeadingShow,
};

const mutations: any = {
    saveBigHeadingShowTrue(states: any) {
        states.bigHeadingShow = true;
    },
    saveBigHeadingShowFalse(states: any) {
        states.bigHeadingShow = false;
    }
};
const actions: any = {
    async bigHeadingShowTrue(context: { commit: Commit }, data: any) {
        context.commit('saveBigHeadingShowTrue');
    },
    async bigHeadingShowFalse(context: { commit: Commit }, data: any) {
        context.commit('saveBigHeadingShowFalse');
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
