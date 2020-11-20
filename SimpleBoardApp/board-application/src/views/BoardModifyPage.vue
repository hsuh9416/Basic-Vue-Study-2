<template>
    <div align="center">
        <h2>게시판 수정</h2>
        <board-modify-form/>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardModifyForm from '@/components/BoardModifyForm'

    export default {
    // 컴포넌트 이름
        name : 'BoardModifyPage',
    // 지역 컴포넌트 등록
        components : { BoardModifyForm }
    }
</script>