<template>
    <!-- <div>
        <h3>게시판 수정 폼</h3>
        <button type="submit">수정</button>
        <router-link :to="{ name : 'BoardReadPage', params: { boardNo : 100 } }">취소</router-link>
    </div> -->

    <!-- 수정 화면 구성 -->
    <form @submit.prevent="onSubmit"> 
        <table>
            <tr>
                <td>번호</td>
                <td><input :value="board.boardNo" type="text" disabled></td>
            </tr>
            <tr>
                <td>등록일시</td>
                <td><input :value="board.regDate" type="text" disabled></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" v-model="title"></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" :value="board.writer" disabled></td>
            </tr>
            <tr>
                <td>내용</td>
                <td><textarea v-model="content" rows="5"></textarea></td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name : 'BoardReadPage', params : { boardNo : board.boardNo.toString() } }">취소</router-link>
        </div>
    </form>

</template>

<script>
    export default{
        // 컴포넌트 이름
        name : 'BoardModifyForm',
        props : {
            board : {
                type : Object,
                required : true
            }
        },
        data() {
            return {
                title: '',
                content: ''
            }
        },
        created() {
            this.title = this.board.title
            this.content = this.board.content
        },
        methods : {
            // 수정 처리 이벤트 발생
            onSubmit(){
                const { title, content } = this
                this.$emit('submit', { title, content })
            }
        }
    }
</script>