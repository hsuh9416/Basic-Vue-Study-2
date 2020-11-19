/*
    [Vuex]
    => 상태 관리를 위한 패턴이자 라이브러리, 중앙 집중식 저장소 역할을 담당
    => 상태 관리 : 여러 컴포넌트 간 데이터 전달 및 이벤트 통신을 한곳에서 관리
    => 중앙 집중식 저장소 : 데이터를 store라는 파일을 통해 관리하고 프로젝트 전체에 걸쳐 활용(프로젝트 단위 전역 변수 활용)
    =>

    (참고)
    [context]
    => Application의 상태를 포함하고 있는 정보의 접근을 제공하는 것
    => 즉 context.commit는 시스템(Application) 상에 관련 정보를 갱신해서 반영하는 행위에 가깝다.(cf. DB에 commit하는 행위)

    [import]
    => import { 불러올 변수 또는 함수 이름 } from '파일 경로'
*/

// Vue와 Vuex 모듈 불러오기
import Vue from 'vue'
import Vuex from 'vuex'

// 분리 정의된 Vuex 기능 모듈 임포트
import state from './states.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

// Vue에 Vuex 등록하기(Vue 플러그인 * 다른 라이브러리도 동일한 방식으로 등록함)
Vue.use(Vuex)

// 스토어 만들기
/*
const store = new Vuex.Store({

    // 분리되기 전 사용하던 방식
    //state 옵션
    // state는 스토어에서 관리하는 상태를 나타내며, 애플리케이션에서 사용할 데이터를 정의한다.
    state : {
        todoItems: []
    },
    // getters는 컴포넌트의 계산된 속성의 공통 사용을 정의한다(computed)
    getters :{

    }
    // 뮤테이션(mutations)는 스토어의 상태를 변경할 수 있는 방법이다.(실제로 작동하는 방식) (getters에 대응되는 setters에 해당)
    // 애플리케이션은 mutations와 직접 통신하지 않고 actions를 통해 통신한다.
    // 동기적 처리
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
    // 비동기적 처리(보통 콜백 함수로 작성) => 호출은 dispatch
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

*/

/*
    // 분리로 인하여 외부로 노출 방법 변경
*/
export default new Vuex.Store({
        state,
        actions,
        mutations,
        getters
});
