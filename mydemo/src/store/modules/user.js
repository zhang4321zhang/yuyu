// 引入封装好的接口
import { getUserList, getUserCount } from '../../util/axios'

//state
const state = {
    userList: [],
    size: 2,//每个组件渲染的条数
    page: 1,//页码
    total: 0//总条数
}

// getters
const getters = {
    getUserList() {
        return state.userList;
    },
    getUserCount() {
        return state.total;
    },
    getUserSize() {
        return state.size;
    },
}

// mutations
const mutations = {
    REQ_USERLIST(state, payload) {
        state.userList = payload
    },
    REQ_USERCOUNT(state, payload) {
        state.total = payload
    },
    REQ_PAGE(state, payload) {
        state.page = payload
    }
}

// actions
const actions = {
    // 获取管理员列表
    getUserAction(context) {
        // console.log(context);
        // 调取列表接口
        getUserList({
            size: context.state.size,
            page: context.state.page,

        })
            .then(res => {
                // console.log(res,'响应');
                if (res.data.code == 200) {
                    context.commit("REQ_USERLIST", res.data.list)
                }
            })
            .catch(err => {
                console.log(err, '错误响应');
            })
    },
    // 封装一个获取总条数事件
    getCountAction({ commit }) {
        getUserCount().then(res => {
            if (res.data.code == 200) {
                commit("REQ_USERCOUNT", res.data.list[0].total)
            }
        });
    },
    // 封装一个修改page的action
    changePageAction(context, payload) {
        context.commit('REQ_PAGE', payload)
        // 重新调取列表
        context.dispatch('getUserAction')
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}