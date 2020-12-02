<template>
    <div align="center">
        <h2>회원게시판 수정</h2>
        <board-modify-form v-if="board"
            :board="board"
            @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>
import api from '@/api'
import BoardModifyForm from '@/components/board/BoardModifyForm'
import { mapState } from 'vuex'

export default {
    name: 'BoardModifyPage',
    components: { BoardModifyForm },
    props: {
       boardNo: {
           type: String,
           required: true
        } 
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        onSubmit(payload){
            const { title, content } = payload
            api.put(`/boards/${this.boardNo}`,{ title, content })
            .then( res => {
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'BoardReadPage',
                    params: {
                        boardNo: res.data.boardNo.toString()
                    }
                })
            })
            .catch( err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({ name: 'Signin'})
                }
                else{
                    alert('오류로 인하여 게시글 수정에 실패하였습니다.')
                    console.log(err.response.data.message)
                }
            })
        }
    }
}
</script>