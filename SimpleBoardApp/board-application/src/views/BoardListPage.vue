<template>
    <div align="center">
        <h2>게시판 목록</h2>
        <router-link :to="{ name : 'BoardRegisterPage'}">새로만들기</router-link>

        <board-list/>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardList from '@/components/BoardList'

    export default {
    // 컴포넌트 이름
        name : 'BoardListPage',
    // 지역 컴포넌트 등록
        components : { BoardList }
    }
</script>