<!-- 템플릿 -->
<template>
    <div>
        <!-- <li v-for= "(todoItem, index) in todoItems" v-bind:key= "index"> -->
        <li>
            <!-- {{ todoItem }}  -->
            <!-- 새로 정의한 isEditing 메서드의 반환값을 가지고 편집여부를 확인한다. -->
            <span v-if= "!isEditing" v-on:dblclick = "handlerDblClick">
                {{ todoItem.content }}
            </span>
            <!-- handleBlur(index)를 handleBlur()로 변경하고 updateTodo(index, $event)를 updateTodo(todoItem, id, $event)로 변경한다. -->
            <input v-else type= "text" ref= "content"
                v-bind:value= "todoItem.content"
                v-on:blur= "handleBlur"
                v-on:keydown.enter= "updateTodo"
            />
            <!-- Todo 항목 완료 상태를 변경하는 체크 박스 -->
            <input type="checkbox" v-bind:checked="todoItem.done" v-on:change="toggleTodoStatus()">
            <!-- 버튼을 클릭하면 해당 Todo 항목을 삭제한다 -->
            <button v-on:click= "removeTodo">삭제</button>
        </li>
    </div>
</template>


<script>
    export default {
    name : 'TodoItem',
    props : {
        todoItem : {
            type : Object
        },
        editingId : {
            type : Number
        }
    },
    computed : {
        isEditing() {
            return this.todoItem.id === this.editingId
        }
    },
    methods : {
                //해당 Todo 항목을 삭제한다.
            // removeTodo(todoItem, index){
            removeTodo(){
                const id = this.todoItem.id
                // Todo 항목값과 Todo 항목인덱스를 인자 값으로 추가하여 이벤트 전달
                // this.$emit('removeTodo', todoItem, index)
                this.$emit('removeTodo', id)
            },
            // 더블클릭 이벤트를 처리하는 메서드
            // handlerDblClick(index){
            handlerDblClick(){
     
                // 종전 코드
                /*
                this.todoItems[index].isEditing = true;

                console.log("handleDblClick this.$refs :",this.$refs)
                console.log("handleDblClick this.$refs.content :",this.$refs.content)
                */
                // 비구조화 할당 구문을 이용하여 변수를 선언한다.
                // const { id } = this.todoItems[index]
                const { id } = this.todoItem

                this.$emit('setEditingId', id)

                // 업데이트가 비동기적으로 발생하므로 DOM 요소 업데이트 완료를 보장하기 위해서 다음 메소드 사용!
                this.$nextTick(()=>{
                    /*
                    종전 코드
                    console.log("handleDblClick this.$refs.content[0] :",this.$refs.content[0])
                    */
                    this.$refs.content.focus()
                })
            },
            // 포커스가 사라지면 실행되는 메서드
            // 기존의 index 매개변수를 제거하고 resetEditingId 이벤트를 발생시킨다.
            handleBlur(){
                // this.todoItems[index].isEditing = false; <= 종전 코드
                this.$emit('resetEditingId')
            },
            // 사용자가 수정내용을 입력하고 엔터키를 눌렀을 때 Todo 항목 수정 이벤트를 발생시켜 상위 컴포넌트에 전달하는 메서드
            // updateTodo(index, e){
            // updateTodo(id, e){
            updateTodo(e){
                // console.log('updateTodo e :', e)
                const id = this.todoItem.id
                const content = e.target.value.trim()
                if(content.length <= 0){
                    return false;
                }
                // updateTodo 이벤트를 발생시키고 id와 수정내용을 넘겨준다.
                this.$emit('updateTodo',content, id)

                this.$refs.content.blur() // focus가 해제될 때 처리
            },
            toggleTodoStatus(){
                const id = this.todoItem.id
                this.$emit('toggleTodoStatus',id)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color : #19ce60;
    }
</style>