// 引入封装好的接口
import {getMenuList} from '../../util/axios' 

//state
const state = {
    menuList:[]
}

// getters
const getters = {
    getMenuList(state){
        return state.menuList
    }
}

// mutations
const mutations = {
    REQ_MENULIST(state,payload){
        state.menuList=payload
    }
}

// actions
const actions = {
    // 获取菜单列表
    getMenuListAction({commit}){                      
        getMenuList({
            istree:true
        })
        .then(res=>{
            // console.log(res,'响应');
            if(res.data.code==200){
                commit("REQ_MENULIST",res.data.list)
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