<template>
    <div align="center">
        <h2>게시판 상세보기</h2>
        <board-read/>
        <router-link :to="{ name : 'BoardModifyPage', params : { boardNo : 100 } }">편집</router-link>
        <button>삭제</button>
        <router-link :to="{ name : 'BoardListPage' }">목록</router-link>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardRead from '@/components/BoardRead'

    export default {
    // 컴포넌트 이름
        name : 'BoardReadPage',
    // 지역 컴포넌트 등록
        components : { BoardRead }
    }
</script>