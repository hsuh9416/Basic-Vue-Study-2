<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>번호</td>
                <td><input :value="board.boardNo" type="text" disabled></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input v-model="title" type="text"></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input :value="board.writer" type="text" disabled></td>
            </tr>
                        <tr>
                <td>번호</td>
                <td>
                    <textarea v-model="content" rows="5"></textarea>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name: 'BoardReadPage', params: { boardNo: board.boardNo.toString()}}">취소</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'BoardModifyForm',
    props: {
        board: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        onSubmit(){
            const { title, content } = this
            this.$emit('submit', { title, content })
        }
    },
    created(){
        this.title = this.board.title
        this.content = this.board.content
    }
}
</script>