<template>
  <div class="clearAllContainter">
      <span class="clearAllBtn" @click="clearTodo">전부 삭제하기</span>
  </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            this.$emit('removeAll');
        } 
    }
}
</script>

<style>
    .clearAllContainter {
        width : 8.5rem;
        height : 50px;
        line-height : 50px;
        background-color : white;
        border-radius : 5px;
        margin : 0 auto;
    }

    .clearAllBtn {
        color : #e20303;
        display : black;
    }
</style>