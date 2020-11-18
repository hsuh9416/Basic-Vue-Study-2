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
    <TodoList v-bind:todoItems="todoItems" v-on:removeTodo="onRemoveTodo"></TodoList>
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

// 헬퍼 함수를 불러온다.
import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  // data 속성 todoItems 선언
  computed : {
    /*
    todoItems(){
      return store.state.todoItems <= main.js를 통하지 않고 수행하는 기존 방식 
      return this.$store.state.todoItems <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
    }
    */
    /*
       * mapState 헬퍼 함수
        - 객체 전개 연산자(Object Spread Operator, '...A' 형식을 말함. 매개변수가 많은 함수를 호출할 때 용의)를 이용
        - mapState 헬퍼 함수가 제공하는 스토어 상태 외에 컴포넌트 내에서 자체로 정의한 computed 속성을 함께 사용할 수 있다.
          => 즉, 병용해서 사용가능하다는 얘기임.
     */
    ...mapState([
      'todoItems'
    ])
  },
  components : {
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList" : TodoList,
    "TodoFooter" : TodoFooter
  },

  // methods 속성
  methods : {
    /*
      * mapActions 헬퍼 함수
      - 객체 전개 연산자(Object Spread Operator, '...A' 형식을 말함. 매개변수가 많은 함수를 호출할 때 용의)를 이용
      - mapActions 헬퍼 함수가 제공하는 스토어 상태 외에 컴포넌트 내에서 자체로 정의한 computed 속성을 함께 사용할 수 있다.
        => 즉, 병용해서 사용가능하다는 얘기임.
    */
    ...mapActions([
      'clearAll',
      'addTodo',
      'removeTodo'
    ]),
    // 모든 Todo 항목을 삭제한다.
    onClearAll(){
      // clearAll(){
      // store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('clearAll')  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
      this.clearAll()
    },
    // 새로운 Todo 항목을 추가한다.
    onAddTodo(todoItem){
      // addTodo(todoItem){
      //store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('addTodo', todoItem)  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
      this.addTodo(todoItem)
    },
    // 특정 Todo 항목을 삭제한다.
    onRemoveTodo(todoItem, index){
      // removeTodo(index){
      // store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      // this.$store.dispatch('removeTodo', index)  <= 헬퍼 함수 사용전 & 프로퍼티로 수행하는 방식 
      this.removeTodo(index)
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
