<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div>
      <!-- v-for 디렉티브를 사용한 리스트 렌더링 -->
      <ul>
        <li v-for= "(todoItem, index) in todoItems" v-bind:key= "index">
            <!-- {{ todoItem }}  -->
            <span v-if= "!todoItem.isEditing" v-on:dblclick = "handlerDblClick(index)">
                {{ todoItem.content }}
            </span>
            <input v-else type= "text" ref= "content"
                v-bind:value= "todoItem.content"
                v-on:blur= "hanlderBlur(index)"
                v-on:keydown.enter= "updateTodo(index, $event)"
            />
            <!-- 버튼을 클릭하면 해당 Todo 항목을 삭제한다 -->
            <button v-on:click= "removeTodo(todoItem, index)">삭제</button>
        </li>
      </ul>
  </div>
</template>

<!-- 뷰 컴포넌트 내용 정의 영역 -->
<script>
export default {
    props : ['todoItems'],
    //methods 속성
    methods : {
        //해당 Todo 항목을 삭제한다.
        removeTodo(todoItem, index){
            // Todo 항목값과 Todo 항목인덱스를 인자 값으로 추가하여 이벤트 전달
            this.$emit('removeTodo', todoItem, index);
        },
        // 사용자가 수정내용을 입력하고 엔터키를 눌렀을 때 Todo 항목 수정 이벤트를 발생시켜 상위 컴포넌트에 전달하는 메서드
        updateTodo(index, e){
            console.log('updateTodo e :', e)
            const content = e.target.value.trim()
            if(content.length <= 0){
                return false;
            }
            this.$emit('updateTodo',content, index)

            this.$refs.content[0].blur()
        },
        // 더블클릭 이벤트를 처리하는 메서드
        handlerDblClick(index){
            this.todoItems[index].isEditing = true;

            console.log("handleDblClick this.$refs :",this.$refs)
            console.log("handleDblClick this.$refs.content :",this.$refs.content)

            // 업데이트가 비동기적으로 발생하므로 DOM 요소 업데이트 완료를 보장하기 위해서 다음 메소드 사용!
            this.$nextTick(()=>{
                console.log("handleDblClick this.$refs.content[0] :",this.$refs.content[0])
                this.$refs.content[0].focus()
            })
        },
        // 포커스가 사라지면 실행되는 메서드
        hanlderBlur(index){
            this.todoItems[index].isEditing = false;
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
