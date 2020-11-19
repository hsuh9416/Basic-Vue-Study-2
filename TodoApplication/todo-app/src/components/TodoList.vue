<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div>
      <!-- v-for 디렉티브를 사용한 리스트 렌더링 -->
      <ul>
        <!-- 
            <li v-for= "(todoItem, index) in todoItems" v-bind:key= "index">
             {{ todoItem }}
            // 새로 정의한 isEditing 메서드의 반환값을 가지고 편집여부를 확인한다.
            <span v-if= "!isEditing(index)" v-on:dblclick = "handlerDblClick(index)">
                {{ todoItem.content }}
            </span>
            //handleBlur(index)를 handleBlur()로 변경하고 updateTodo(index, $event)를 updateTodo(todoItem, id, $event)로 변경한다.
            <input v-else type= "text" ref= "content"
                v-bind:value= "todoItem.content"
                v-on:blur= "handleBlur()"
                v-on:keydown.enter= "updateTodo(todoItem.id, $event)"
            />
            // 버튼을 클릭하면 해당 Todo 항목을 삭제한다 
            <button v-on:click= "removeTodo(todoItem, index)">삭제</button>
        </li> 
        -->
        <TodoItem v-for="todoItem in todoItems"
            v-bind:key="todoItem.id"
            v-bind:todoItem="todoItem"
            v-bind:editingId="editingId"
            v-on:removeTodo="onRemoveTodo"
            v-on:updateTodo="onUpdateTodo"
            v-on:setEditingId="SET_EDITING_ID"
            v-on:resetEditingId="RESET_EDITING_ID"/>
      </ul>
  </div>
</template>

<!-- 뷰 컴포넌트 내용 정의 영역 -->
<script>
// TodoItem 컴포넌트 임포트
import TodoItem from './TodoItem.vue'
// 헬퍼 함수 호출
import { mapState, mapMutations } from 'vuex'
// 선언된 뮤테이션 타입 호출
import { RESET_EDITING_ID, SET_EDITING_ID} from '../store/mutation-types'

export default {
    // props : ['todoItems','editingId'],
    components: { 'TodoItem' : TodoItem }, // 지역 컴포넌트 등록
    computed :{
    ...mapState([
      'todoItems',
      // 헬퍼 함수에 editingId 값을 컴포넌트에 매핑
      'editingId'
    ])
    },
    //methods 속성
    methods : {

        /* 
        //해당 Todo 항목을 삭제한다.
        removeTodo(todoItem, index){
            // Todo 항목값과 Todo 항목인덱스를 인자 값으로 추가하여 이벤트 전달
            this.$emit('removeTodo', todoItem, index);
        },
        // 사용자가 수정내용을 입력하고 엔터키를 눌렀을 때 Todo 항목 수정 이벤트를 발생시켜 상위 컴포넌트에 전달하는 메서드
        // updateTodo(index, e){
        updateTodo(id, e){
            // console.log('updateTodo e :', e)
            const content = e.target.value.trim()
            if(content.length <= 0){
                return false;
            }
            // updateTodo 이벤트를 발생시키고 id와 수정내용을 넘겨준다.
            this.$emit('updateTodo',content, id)

            this.$refs.content[0].blur() // focus가 해제될 때 처리
        },
        // 더블클릭 이벤트를 처리하는 메서드
        handlerDblClick(index){
            // 종전 코드
            /
            this.todoItems[index].isEditing = true;

            console.log("handleDblClick this.$refs :",this.$refs)
            console.log("handleDblClick this.$refs.content :",this.$refs.content)
            /
           // 비구조화 할당 구문을 이용하여 변수를 선언한다.
           const { id } = this.todoItems[index]

           this.$emit('setEditingId', id)

            // 업데이트가 비동기적으로 발생하므로 DOM 요소 업데이트 완료를 보장하기 위해서 다음 메소드 사용!
            this.$nextTick(()=>{
                /
                종전 코드
                console.log("handleDblClick this.$refs.content[0] :",this.$refs.content[0])
                /
                this.$refs.content[0].focus()
            })
        },
        // editing 속성값으로 편집상태를 확인한다.
        isEditing(index){
            if(this.todoItems[index]){
                return this.todoItems[index].id === this.editingId
            }
            return false
        },
        // 포커스가 사라지면 실행되는 메서드
        // 기존의 index 매개변수를 제거하고 resetEditingId 이벤트를 발생시킨다.
        handleBlur(){
            // this.todoItems[index].isEditing = false; <= 종전 코드
            this.$emit('resetEditingId')
        }
        */
        ...mapMutations([
            SET_EDITING_ID,
            RESET_EDITING_ID
        ]),
        onRemoveTodo(id){
            this.$emit('removeTodo',id)
        },
        onUpdateTodo(content, id){
            this.$emit('updateTodo', content, id)
        }
    }
        
}
</script>

<!-- 템플릿 HTML 요소 스타일 정의 영역 -->
<style scoped>
div {
    background-color: #19ce60;
}
</style>
