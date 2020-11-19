// 게터(getter) 정의
export default {
    // 필터링 처리된 Todo 항목 목록을 반환한다.
    filteredTodoItems(state){
        // 필터값이 선택되지 않았다면 전체 Todo 항목 목록을 그대로 반환
        if (!state.filter){
            return state.todoItems
        }
        // 완료되지 않은 Todo 항목 목록을 반환
        if (state.filter === 'A'){
            return state.todoItems.filter(todoItem => {return todoItem.done === false})
        } 
        // 완료된 Todo 항목 목록을 반환
        if (state.filter === 'B') {
            return state.todoItems.filter(todoItem => { return todoItem.done === true })
        }
    }
}