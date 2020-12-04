<template>
    <div align="center">
        <h2>회원게시판 상세보기</h2>
        <board-read v-if="board" :board="board"/>
        <p v-else>loading...</p>
        <template v-if="isAuthorized">
            <router-link :to="{ name: 'BoardModifyPage', params: {boardNo}}">편집</router-link>
            <button @click="onDelete">삭제</button>
        </template>
        <router-link :to="{name: 'BoardListPage'}">목록</router-link>
    </div>
</template>

<script>
import api from '@/api'
import BoardRead from '@/components/board/BoardRead'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'BoardReadPage',
    components: { BoardRead },
    props: {
        boardNo: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters(['isAuthorized']),
        ...mapState(['board'])
    },
    created(){
        this.fetchBoard(this.boardNo)
        .catch( err =>{
            console.log(err.response.data.message)
            alert('오류 발생으로 인하여 게시글을 불러오지 못하였습니다.')
            this.$router.back()
        })
    },
    methods: {
        onDelete(){
            const { baordNo } = this.board
            api.delete(`/boards/${boardNo}`)
            .then( res =>{
                alert('게시글이 정상적으로 삭제되었습니다.')
                this.$router.push({ name: 'BoardListPage'})
            })
            .catch( err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({name: 'Signin'})
                } else{
                    alert('오류로 인하여 게시글을 삭제할 수 없었습니다.')
                    console.log(err.response.data.message)
                }
            })
        },
        ...mapActions([
            'fetchBoard'
        ])
    }
}
</script>