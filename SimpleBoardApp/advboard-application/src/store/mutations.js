import { 
    SET_ACCESS_TOKEN, 
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
    FETCH_CODECLASS_LIST,
    FETCH_CODECLASS,
    FETCH_CODEDETAIL_LIST,
    FETCH_CODEDETAIL,
    FETCH_JOBCODE_LIST,
    FETCH_MEMBER_LIST,
    FETCH_MEMBER,
    FETCH_BOARD_LIST,
    FETCH_BOARD,
    FETCH_NOTICE_LIST,
    FETCH_NOTICE,
    FETCH_ITEM_LIST,
    FETCH_ITEM,
    FETCH_CHARGECOIN_LIST
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
    },
    [FETCH_CODECLASS_LIST](state, codeClasses){
        state.codeClasses = codeClasses
    },
    [FETCH_CODECLASS](state, codeClass){
        state.codeClass = codeClass
    },
    [FETCH_CODEDETAIL_LIST](state, codeDetails){
        state.codeDetails = codeDetails
    },
    [FETCH_CODEDETAIL](state, codeDetail){
        state.codeDetail = codeDetail
    },
    [FETCH_JOBCODE_LIST](state, jobCodes){
        state.jobCodes = jobCodes
    },
    [FETCH_MEMBER_LIST](state, members){
        state.members = members
    },
    [FETCH_MEMBER](state, member){
        state.member = member
    },
    [FETCH_BOARD_LIST](state, boards){
        state.boards = boards
    },
    [FETCH_BOARD](state, board){
        state.board = board
    },
    [FETCH_NOTICE_LIST](state, notices){
        state.notices = notices
    },
    [FETCH_NOTICE](state, notice){
        state.notice = notice
    },
    [FETCH_ITEM_LIST](state, items){
        state.items = items
    },
    [FETCH_ITEM](state, item){
        state.item = item
    },
    [FETCH_CHARGECOIN_LIST](state, chargeCoins){
        state.chargeCoins = chargeCoins
    }
}