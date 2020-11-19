<!-- Vue 애플리케이션의 루트 컴포넌트 -->
<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- addTodo 이벤트를 수신하여 addTodo() 메서드를 실행한다. -->
    <!-- <TodoInput v-on:addTodo="addTodo"></TodoInput> -->
    <TodoInput v-on:addTodo="onAddTodo"></TodoInput>
    <!-- todoItems 데이터를 props로 전달한다. removeTodo 이벤트를 수신하여 removeTodo() 메서드를 실행한다. -->
    <!-- <TodoList v-bind:todoItems="todoItems" v-on:removeTodo="removeTodo"></TodoList> -->
    <!-- updateTodo 이벤트를 처리할 메서드를 지정한다. -->
    <!--
        종전 코드 삭제 
        <TodoList v-bind:todoItems="todoItems" 
        v-bind:editingId ="editingId"
        v-on:removeTodo="onRemoveTodo"
        v-on:updateTodo="onEditTodo"
        v-on:setEditingId="SET_EDITING_ID"
        v-on:resetEditingId="RESET_EDITING_ID"></TodoList> -->
      <TodoList v-on:removeTodo="onRemoveTodo"
            v-on:updateTodo="onEditTodo"
            v-on:toggleTodoStatus="onToggleTodoStatus"></TodoList>
    <!-- removeAll 이벤트를 수신하여 clearAll() 메서드를 실행한다. -->
    <!-- <TodoFooter v-on:removeAll="clearAll"></TodoFooter> -->
    <TodoFooter v-on:removeAll="onClearAll"></TodoFooter>
  </div>
</template>

<!-- 뷰 컴포넌트 내용 정의 영역 -->
<script>
// 스토어를 임포트한다.
// import store from './store' <= main.js를 통하지 않고 수행하는 기존 방식
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

/*
  => TodoItem으로 이관
// 헬퍼 함수를 불러온다.
import { mapState, mapActions, mapMutations } from 'vuex'
// 편집 관련 뮤테이션 타입을 불러온다.
import { RESET_EDITING_ID, SET_EDITING_ID } from './store/mutation-types'
*/
import { mapActions } from 'vuex'

export default {
  name: 'App',
  // data 속성 todoItems 선언
  components : {
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList" : TodoList,
    "TodoFooter" : TodoFooter
  },
/*
  computed : {

    todoItems(){
      return store.state.todoItems <= main.js를 통하지 않고 수행하는 기존 방식 
      return this.$store.state.todoItems <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
    }
 

       * mapState 헬퍼 함수
        - 객체 전개 연산자(Object Spread Operator, '...A' 형식을 말함. 매개변수가 많은 함수를 호출할 때 용의)를 이용
        - mapState 헬퍼 함수가 제공하는 스토어 상태 외에 컴포넌트 내에서 자체로 정의한 computed 속성을 함께 사용할 수 있다.
          => 즉, 병용해서 사용가능하다는 얘기임.
  
    ...mapState([
      'todoItems',
      // 헬퍼 함수에 editingId 값을 컴포넌트에 매핑
      'editingId'
    ])
  },
*/
  // methods 속성
  methods : {
    /* 
     mapMutations 헬퍼 함수를 통해 수정중인 ID값을 설정/해제하는 뮤테이션 함수를 컴포넌트에 매핑
    ...mapMutations([
      SET_EDITING_ID,
      RESET_EDITING_ID
    ]),
    */
      /*
      * mapActions 헬퍼 함수
      - 객체 전개 연산자(Object Spread Operator, '...A' 형식을 말함. 매개변수가 많은 함수를 호출할 때 용의)를 이용
      - mapActions 헬퍼 함수가 제공하는 스토어 상태 외에 컴포넌트 내에서 자체로 정의한 computed 속성을 함께 사용할 수 있다.
        => 즉, 병용해서 사용가능하다는 얘기임.
    */
    ...mapActions([
      'clearAll',
      'addTodo',
      'removeTodo',
    // mapActions 헬퍼 함수에 사용할 actions 함수를 주입한다.
      'save',
      'restore',
      'editTodo',
      'toggleTodoStatus'
    ]),
    // 모든 Todo 항목을 삭제한다.
    onClearAll(){
      // clearAll(){
      // store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('clearAll')  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
      this.clearAll()
      // 주입된 actions의 함수 save()를 호출한다.
      this.save()
    },
    // 새로운 Todo 항목을 추가한다.
    //    onAddTodo(todoItem){
    // 매개변수명을 todoItem에서 content로 변경
    onAddTodo(content){
      // addTodo(todoItem){
      //store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('addTodo', todoItem)  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 

      /*
      //편집 상태 반영 전 코드
      // Todo 항목에 편집상태를 표시할 isEditing 플래그 속성을 추가
      const isEditing = false
      const todoItem = { isEditing, content }
      */
      // Todo 항목 ID를 생성하여 새 항목을 만든다.
      const id = new Date().getTime() // 오늘날짜로 된 ID 생성
 
      // Todo 항목 완료 상태를 나타내는 속성의 정의
      const done = false
      const todoItem = { id, content, done }

      this.addTodo(todoItem)
      // 주입된 actions의 함수 save()를 호출한다.
      this.save()
    },
    // 특정 Todo 항목을 삭제한다.
    // onRemoveTodo(todoItem, index){
    onRemoveTodo(id){
      // removeTodo(index){
      // store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('removeTodo', index)  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
      // this.removeTodo(index)
      this.removeTodo(id)
      // 주입된 actions의 함수 save()를 호출한다.
      this.save()
    },
    // 인덱스 대신 Todo 항목 ID와 함께 수정내용을 전달한다.
    // onEditTodo(content, index){
    onEditTodo(content, id){
      // this.editTodo({ index, content })//payload
      this.editTodo({ id, content })//payload
      this.save()
    },
    onToggleTodoStatus(id){
      this.toggleTodoStatus(id)
      this.save()
    },
    // 컴포넌트 라이프 사이클 created()에서 저장된 데이터를 불러온다.
    created(){
      // 주입된 actions의 함수 restore()를 호출한다.
      this.restore()
    }
  }
}
</script>

<!-- 템플릿 HTML 요소 스타일 정의 영역 -->
<style>
#app {
  text-align: center;
  background-color: #f7f9fa;
}
</style>
