<!-- Vue 애플리케이션의 루트 컴포넌트 -->
<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- addTodo 이벤트를 수신하여 addTodo() 메서드를 실행한다. -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!-- todoItems 데이터를 props로 전달한다. removeTodo 이벤트를 수신하여 removeTodo() 메서드를 실행한다. -->
    <TodoList v-bind:todoItems="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <!-- removeAll 이벤트를 수신하여 clearAll() 메서드를 실행한다. -->
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
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

export default {
  name: 'App',
  // data 속성 todoItems 선언
  computed : {
    todoItems(){
      // return store.state.todoItems <= main.js를 통하지 않고 수행하는 기존 방식 
      return this.$store.state.todoItems 
    }
  },
  components : {
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList" : TodoList,
    "TodoFooter" : TodoFooter
  },
  // methods 속성
  methods : {
    // 모든 Todo 항목을 삭제한다.
    clearAll(){
      //store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      this.$store.dispatch('clearAll')
    },
    // 새로운 Todo 항목을 추가한다.
    addTodo(todoItem){
      //store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      this.$store.dispatch('addTodo', todoItem)
    },
    // 특정 Todo 항목을 삭제한다.
    removeTodo(index){
      //store 프로퍼티를 이용한 스토어 접근
      // 스토어 dispatch 메서드를 통해서 clearAll 액션을 호출한다.
      this.$store.dispatch('removeTodo', index)
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
