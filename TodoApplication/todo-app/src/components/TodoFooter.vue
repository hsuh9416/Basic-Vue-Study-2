<!-- 화면 표시 요소 정의 영역 -->
<template>
  <div>
    <button v-on:click="clearTodo">모두 삭제</button>
  </div>
</template>

<!-- 뷰 컴포넌트 내용 정의 영역 -->
<script>
export default {
    //methods 속성
    methods : {
        //Todo 항목을 모두 삭제한다.
        clearTodo(){
            // Todo 항목을 모두 삭제하는 이벤트 전달
            this.$emit('removeAll');
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
