import Vue from 'vue'
import Vuex from 'vuex'
// 引入插件
import VuexPersist from 'vuex-persist'
// import createPersistedState from 'vuex-persistedstate'
// import axios from 'axios'

Vue.use(Vuex)
// 实例化插件
const vuexLocal = new VuexPersist({
    storage:window.localStorage

})
export default new Vuex.Store({
    // 存储全局状态得
    state:{
        loading:true,
        is:666,
    },
    mutations:{},
    actions:{},
    modules:{},
    getters:{},

    plugins:[vuexLocal.plugin]
    // plugins: [createPersistedState()]

})