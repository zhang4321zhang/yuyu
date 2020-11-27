// 引入封装好的接口
import {getRoleList} from '../../util/axios' 

//state
const state = {
    roleList:[]
}

// getters
const getters = {
    getRoleList(state){
        return state.roleList
    }
}

// mutations
const mutations = {
    REQ_ROLELIST(state,payload){
        state.roleList=payload
    }
}

// actions
const actions = {
    // 获取角色列表
    getRoleAction({commit}){
        // 调取列表接口
        getRoleList({
            istree:true
        })
        .then(res=>{
            // console.log(res,'响应');
            if(res.data.code==200){
                commit("REQ_ROLELIST",res.data.list)
            }
        })
        .catch(err=>{
            console.log(err,'错误响应');
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}