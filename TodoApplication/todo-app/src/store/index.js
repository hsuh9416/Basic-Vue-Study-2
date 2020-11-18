/*
    [Vuex]

*/

// Vue와 Vuex 모듈 불러오기
import Vue from 'vue'
import Vuex from 'vuex'

// Vue에 Vuex 등록하기(Vue 플러그인 * 다른 라이브러리도 동일한 방식으로 등록함)
Vue.use(Vuex)

// 스토어 만들기
const store = new Vuex.Store({
    //state 옵션
    // state는 스토어에서 관리하는 상태를 나타내며, 애플리케이션에서 사용할 데이터를 정의한다.
    state : {
        todoItems: []
    },
    // 뮤테이션(mutations)는 스토어의 상태를 변경할 수 있는 방법이다.(실제로 작동하는 방식)
    // 애플리케이션은 mutations와 직접 통신하지 않고 actions를 통해 통신한다.
    mutations : {
        ADD_TODO(state, todoItem){
            state.todoItems.push(todoItem)
        },
        REMOVE_TODO(state, index){
            state.todoItems.splice(index, 1)
        },
        CLEAR_ALL(state){
            state.todoItems = []
        }
    },
    // 액션(actions)은 비동기 처리를 포함할 수 있는 메서드이다.(작동의 경로를 통제하는 방식)
    // 액션을 사용하는 일반적인 경우는 데이터 가공 또는 비동기 처리를 실시한 후, 그 결과를 뮤테이션에 전달하고 뮤테이션을 커밋하는 것이다.
    actions : {
        //context : 뮤테이션 명칭, payload : 전달받은 인자(보통 json 객체)
        addTodo(context, payload){
            context.commit('ADD_TODO',payload)
        },
        removeTodo(context, payload){
            context.commit('REMOVE_TODO', payload)
        },
        clearAll(context){
            context.commit('CLEAR_ALL')
        }
    }
});

// 디폴터 임포트 구문으로 스토어 모튤을 외부에 공개
export default store