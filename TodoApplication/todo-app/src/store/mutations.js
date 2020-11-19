// 선언된 뮤테이션 타입 상수 임포트
import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
// 뮤테이션 타입 상수를 가져온다.
    RESTORE,
    EDIT_TODO,
    SET_EDITING_ID,
    RESET_EDITING_ID,
    TOGGLE_TODO_STATUS,
    SET_FILTER
} from './mutation-types'

// 뮤테이션 함수 정의
export default{
    // ADD_TODO(state, todoItem){ <= 분리되기 전 형식
    // 아래의 []는 상수를 함수 이름으로 쓰기 위한 조치이다.(ES2015 방식) 
    // [ADD_TODO](state, todoItem){
    [ADD_TODO](state, payload){
        // Todo 항목 내용을 분할 대입한다.
        const { content } = payload

        // Todo 항목 추가
        // state.todoItems.push(todoItem)
        state.todoItems.push({
            id : state.nextTodoId,
            content,
            done : false
        })

        state.nextTodoId++

    },
    // [REMOVE_TODO](state, index){
    [REMOVE_TODO](state, id) {
        const targetIndex = state.todoItems.findIndex(v => v.id === id)
        state.todoItems.splice(targetIndex, 1)
    },
    [CLEAR_ALL](state){
        state.todoItems = []
    },
    // RESTORE 뮤테이션 타입 상수를 뮤테이션 이름으로 가지는 뮤테이션 함수를 작성한다.
    // RESTORE은 '' 객체를 불러오고 그 중 todoItems만 호출한다.
    // [RESTORE](state, { todoItems }){
    [RESTORE](state, { todoItems, nextTodoId }){
        state.todoItems = todoItems
        state.nextTodoId = nextTodoId
    },
    [EDIT_TODO](state, payload){
        /*
        // 종전 코드
        const { index, content } = payload
        const isEditing = false // 원상 복귀
        state.todoItems.splice(index, 1, { isEditing, content })// 수정할 인덱스, 수정할 갯수, 대신 입력할 데이터
        */
       // id를 가지고 편집중인 Todo 항목을 찾아내서 수정한다.
       const { id, content } = payload
       const targetIndex = state.todoItems.findIndex( v => v.id === id) // (인자값 => 이후의 로직에 들어 맞는 값을 반환)
       const targetTodoItem = state.todoItems[targetIndex]
       state.todoItems.splice(targetIndex, 1 , {...targetTodoItem, content})

    },
    [SET_EDITING_ID](state, id) {
        state.editingId = id;
    },
    [RESET_EDITING_ID](state) {
        state.editingId = 0;
    },
    [TOGGLE_TODO_STATUS](state, id){
        /*
            filter 함수
            =>배열 요소 중 filter 조건에 맞는 요소만 골라서 배열로 반환
            => filter(반환 대상 요소 => {반환 조건식})
               : 반환 조건식이 true인 경우 포함함
            => 예제의 경우 특정 id 값에 해당하는 아이템을 돌려 받고 그 아이템에 대하여 상태를 변경한다.
        */
        const filtered = state.todoItems.filter(todoItem => {
            return todoItem.id === id
        })

        filtered.forEach(todoItem => {
            todoItem.done = !todoItem.done
        })
    },
    [SET_FILTER](state, filter) {
        state.filter = filter
    }
}