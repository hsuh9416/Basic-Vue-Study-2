<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div>
      <!-- v-for 디렉티브를 사용한 리스트 렌더링 -->
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="index">
            {{ todoItem }} 
            <!-- 버튼을 클릭하면 해당 Todo 항목을 삭제한다 -->
            <button v-on:click="removeTodo(todoItem, index)">삭제</button>
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
