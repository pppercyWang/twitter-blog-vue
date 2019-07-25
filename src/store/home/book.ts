import { Commit } from 'vuex';
// import { apiGetBookList } from '@/api/book';
const state: any = {
    bookList: {},
};

const getters: any = {
    bookList: () => state.bookList,
};

const mutations: any = {
    saveBookList(states: any, data: any) {
        states.bookList = data;
      },
    clearBookList(states: any) {
        states.bookList = {};
    }
};
const actions: any = {
    clearBookList(context: { commit: Commit }) {
        context.commit('clearBookList');
    },
    // 调用api获取数据
    // async bookList(context: { commit: Commit }, data: any) {
    //     console.log('通过action获取bookList数据');
    //     const res: any = await apiGetBookList(data, null);
    //     res.Data.Page = data.page; // 将页面信息同时储存到需要存在store中。如果不存，每次进入这个页面。都会是page为1，size为10。用户体验不好
    //     res.Data.Size = data.size;
    //     context.commit('saveBookList', res.Data);
    // },
    // 获取假数据
    async bookList(context: { commit: Commit }, data: any) {
        console.log('通过action获取bookList数据');
        const res: any = {
            Total: 3,
            List: [
                {
                    ID: 234,
                    CreatedAt: "2019-07-02T13:38:32Z",
                    UpdatedAt: "2019-07-02T13:38:32Z",
                    DeletedAt: null,
                    Name: "鲁滨逊漂流记",
                    Count: "2",
                    Author: "鲁滨逊",
                    Type: "冒险"
                },
                {
                    ID: 236,
                    CreatedAt: "2019-07-02T13:39:00Z",
                    UpdatedAt: "2019-07-02T13:39:00Z",
                    DeletedAt: null,
                    Name: "红楼梦",
                    Count: "6",
                    Author: "曹雪芹",
                    Type: "言情"
                },
                {
                    ID: 237,
                    CreatedAt: "2019-07-02T13:39:32Z",
                    UpdatedAt: "2019-07-02T13:39:32Z",
                    DeletedAt: null,
                    Name: "西游记",
                    Count: "3",
                    Author: "吴承恩",
                    Type: "玄幻"
                },
            ]
        };
        res.Page = data.page;
        res.Size = data.size;
        context.commit('saveBookList', res);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
