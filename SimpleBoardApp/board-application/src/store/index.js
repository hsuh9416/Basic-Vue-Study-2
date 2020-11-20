import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


// Vue에 Vuex 플러그인 등록
Vue.use(Vuex)

// Vuex의 Store 인스턴스 생성

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})