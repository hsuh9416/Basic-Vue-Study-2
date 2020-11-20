// Axios 객체 임포트
import api from "@/api"

// 뮤테이션 타입 상수 임포트
import { 
    FETCH_BOARD_LIST,
    FETCH_BOARD
} from './mutation-types'

// 액션 함수 정의
export default {
    fetchBoardList({ commit }){
        return api.get('/boards')
        .then( res => {
            commit(FETCH_BOARD_LIST, res.data)
        })
    },
    fetchBoard({ commit }, boardNo){
        return api.get(`/boards/${boardNo}`) // 동적 호출 보장
        .then( res => {
            commit(FETCH_BOARD, res.data)
        })
    }
}