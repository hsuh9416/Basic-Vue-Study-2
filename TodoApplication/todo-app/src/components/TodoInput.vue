<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div>
    <!-- v-model 디렉티브를 사용한 양방향 데이터 바인딩 생성 -->
    <!-- Enter 키를 누르면 addTodo() 메서드를 실행한다 -->
    <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
    <!-- 버튼을 클릭하면 Todo 항목을 추가하는 메서드를 실행한다 -->
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<!-- 뷰 컴포넌트 내용 정의 영역 -->
<script>
export default {
    // daa 속성을 통한 데이터 정의
    data(){
        return {
        newTodoItem :''
        }
    },
    //methods 속성
    methods : {
        // Todo 항목을 추가한다.
        addTodo(){
            if(this.newTodoItem !== ''){
                var value = this.newTodoItem && this.newTodoItem.trim();

                // 입력된 Todo 항목값을 인자 값으로 추가하여 이벤트 전달
                this.$emit('addTodo', value);
                this.clearInput();
            }
        },
        // Todo 항목을 추가한 후 입력된 텍스트를 지운다.
        clearInput(){
            this.newTodoItem = '';
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
