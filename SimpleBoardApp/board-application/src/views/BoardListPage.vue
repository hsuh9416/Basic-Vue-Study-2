<template>
    <div align="center">
        <h2>게시판 목록</h2>
        <router-link :to="{ name : 'BoardRegisterPage'}">새로만들기</router-link>
        <!-- BoardList에 computed 속성 boards 게시글 목록 데이터 전달 -->
        <board-list :boards="boards" />
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardList from '@/components/BoardList'
    // Vuex 헬퍼 함수 임포트
    import { mapState, mapActions } from 'vuex'

    export default {
        // 컴포넌트 이름
        name : 'BoardListPage',
        // 지역 컴포넌트 등록
        components : { BoardList },
        // 스토어 상태를 computed 속성으로 등록
        computed : {
            ...mapState(['boards'])
        },
        // 매핑된 함수 fetchBoardList() 실행
        mounted() {
            this.fetchBoardList()
        },
        // 스토어 액션을 methods 속성으로 등록
        methods : {
            ...mapActions(['fetchBoardList'])
        }
    }
</script>