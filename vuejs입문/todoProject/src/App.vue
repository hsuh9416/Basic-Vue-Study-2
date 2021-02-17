<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
/*
(유의점)
 App에 중앙집권적인 관리를 함으로써 data는 공유되지만, 공유를 위한 개별 함수가 추가되어야 하는 경우가 있다.
 ex> this.todoItems.push(todoItem);
 ex> this.todoItems = [];
*/
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
export default {
  data() {
    return {
      todoItems : []
    }
  },
  created() {
    this.makeList();
  },
  methods : {
    makeList() {
      if (localStorage.length > 0) {
        for (var i=0; i < localStorage.length; i++) {
            console.log(localStorage.key(i))
            if(localStorage.key(i) == 'loglevel:webpack-dev-server'){
                continue;
            }
            this.todoItems.push(localStorage.key(i));
        }
      }
    },
    addTodo(todoItem) {
      //로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      console.log("추가된 할 일은 <<",todoItem ,">> 입니다!");
      this.todoItems.push(todoItem);
      },
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      /*
          array.splice(begin[, deleteCount[, addItem1[, addTtem2[, ...]]]])
          => 지울 원소 개수, 추가할 원소들을 받아 원본 배열 객체를 직접 수정합니다. return 지원 원소 집합
          array.splice(deleteIdx,deleteCount=1)
          => deleteIdx번에 있는 원소를 1개 제거합니다. =>return 지운 원소
          ex> this.todoItems.splice(index,1)
              => this.todoItems.splice()
      */
      var deleted = this.todoItems.splice(index,1);
      console.log("삭제돤 idx =",index,", 삭제된 todo =",deleted);
    },
    clearAll(){
      var realDel = confirm('정말 전부 삭제하시겠습니다?')
      if(realDel){
        localStorage.clear();
        this.todoItems = [];
        }
      }
    },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
    body {
        font-family: 'Gaegu', cursive;
        text-align : center;
        background-color : #F6F6F8;
    }
    input {
        font-family: 'Gaegu', cursive;
        border-style : groove;
        width : 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03)
    }
</style>
