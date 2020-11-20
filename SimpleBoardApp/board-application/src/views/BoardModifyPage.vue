<template>
    <div align="center">
        <h2>게시판 수정</h2>
        <board-modify-form v-if="board"
            :board="board"
            @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardModifyForm from '@/components/BoardModifyForm'
    import { mapState, mapActions } from 'vuex'
    import api from '@/api'
    
    export default {
        // 컴포넌트 이름
        name : 'BoardModifyPage',
        // 지역 컴포넌트 등록
        components : { BoardModifyForm },
        // props 등록
        props : {
            boardNo : {
                type : String,
                required : true
            }
        },
        // 스토어 상태를 computed 속성으로 등록
        computed : {
            ...mapState(['board'])
        },
        // 매핑된 함수 fetchBoard() 실행
        created() {
            this.fetchBoard(this.boardNo)
            .catch( err => {
                console.log(err.response.data.message)
                alert('오류로 게시글을 불러 올 수 없었습니다.')
                this.$router.back()
            })
        },
        // 스토어 액션을 methods 속성으로 등록
        methods : {
            ...mapActions(['fetchBoard']),
            onSubmit (payload){
                const { title, content } = payload
                api.put(`/boards/${this.boardNo}`, { title, content })
                .then( res => {
                    alert('게시글이 정상적으로 수정되었습니다.')
                    this.$router.push({
                        name : 'BoardReadPage',
                        params : {
                            boardNo : res.data.boardNo.toString()
                        }
                    })
                })
                .catch( res => {
                    console.log(err.response.data.message)
                    alert('오류로 인하여 수정에 실패하였습니다.')
                })
            }
        }
    }
</script>