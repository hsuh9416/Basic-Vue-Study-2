import { 
    SET_ACCESS_TOKEN, 
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutation-types'

import api from '@/api'
import Cookies from 'js-cookie'

export default {
    [SET_ACCESS_TOKEN](state, accessToken){
        if(accessToken){
            state.accessToken = accessToken

            // HTTP 헤더에 토큰을 설정
            api.defaults.header.common.Authorization = `Bearer ${accessToken}`

            // 쿠키에 엑세스토큰 저장
            Cookies.set('accessToken',accessToken, {expires: 1})
        }
    },
    [SET_MY_INFO](state, myinfo){
        if(myinfo){
            state.myinfo = myinfo
        }
    },
    [DESTROY_ACCESS_TOKEN](state){
        state.accessToken = ''
        // delete Object: 설정된 객체 변수를 삭제하는 로직
        delete api.defaults.header.common.Authorization
        Cookies.remove('accessToken')
    },
    [DESTROY_MY_INFO](state){
        state.myinfo = null

    }
}