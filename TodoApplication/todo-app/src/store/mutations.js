// 선언된 뮤테이션 타입 상수 임포트
import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
// 뮤테이션 타입 상수를 가져온다.
    RESTORE
} from './mutation-types'

// 뮤테이션 함수 정의
export default{
    // ADD_TODO(state, todoItem){ <= 분리되기 전 형식
    // 아래의 []는 상수를 함수 이름으로 쓰기 위한 조치이다.(ES2015 방식) 
    [ADD_TODO](state, todoItem){
        state.todoItems.push(todoItem)
    },
    [REMOVE_TODO](state, index){
        state.todoItems.splice(index, 1)
    },
    [CLEAR_ALL](state){
        state.todoItems = []
    },
    // RESTORE 뮤테이션 타입 상수를 뮤테이션 이름으로 가지는 뮤테이션 함수를 작성한다.
    // RESTORE은 '' 객체를 불러오고 그 중 todoItems만 호출한다.
    [RESTORE](state, { todoItems }){
        state.todoItems = todoItems
    }
}