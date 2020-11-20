<template>
    <div align="center">
        <h2>게시판 등록</h2>
        <!-- 'sumbit' 이벤트 핸들러 지정 -->
        <board-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardRegisterForm from '@/components/BoardRegisterForm' // '@'는 default로 등록되어 있는 src 폴더의 별칭
    
    import api from '@/api'

    export default {
    // 컴포넌트 이름
        name : 'BoardRegisterPage',
    // 지역 컴포넌트 등록
        components : { BoardRegisterForm },
        methods : {
            // 'submit' 이벤트를 처리할 메서드
            onSubmit(payload){
                const { title, content, writer } = payload
                api.post('./boards', { title, content, writer })
                .then( res => {
                    console.log(res)
                    alert('정상 등록되었습니다.')
                    // 등록 후 상세보기 화면으로 이동
                    this.$router.push({
                        name : 'BoardReadPage',
                        params : { boardNo : res.data.boardNo.toString() }
                    })
                })
                .catch( err => {
                    console.log(err.response.data.message)
                    alert('오류 발생으로 등록이 실패하였습니다.')
                })
                
            }
        }
    }
</script>