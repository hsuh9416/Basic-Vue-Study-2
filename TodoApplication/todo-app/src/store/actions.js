// 뮤테이션 타입 상수 임포트
import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
// 뮤테이션 타입 상수를 가져온다.
    RESTORE,
    EDIT_TODO
} from './mutation-types'

// 액션 함수 정의
export default{
    /*
        addTodo(context, payload){ <= 분리되기 전 형식
            context.commit('ADD_TODO', payload)
        },
    */
   // context.commit => commit (비구조화 할당) (addTodo는 context를 객체로 받아온다는 것을 알 수 있으며 그 중의 commit만 불러들여 온다.)
    addTodo({ commit }, payload) {
        commit(ADD_TODO, payload)
    },
    removeTodo({ commit }, payload) {
        commit(REMOVE_TODO, payload)
    },
    clearAll({ commit }) {
        commit(CLEAR_ALL)
    },
    /*
        애플리케이션 데이터를 로컬 스토리지에 저장할 수 있도록 수정하는 함수
    */
    // 애플리케이션 상태 데이터를 저장한다.
    save({ state }){
        const data = {
            todoItems : state.todoItems
        }
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    },
    // 저장된 애플리케이션 상태 데이터를 불러온다.
    restore({ commit }){
        const data = localStorage.getItem('todo-app-data')
        if(data){
            //RESTORE 뮤테이션을 커밋한다.
            commit(RESTORE, JSON.parse(data));
        }
    },
    // Todo 항목을 편집하는 EDIT_TODO 뮤테이션을 실행시킨다.
    editTodo({commit}, payload){
        commit(EDIT_TODO, payload)
    }
}