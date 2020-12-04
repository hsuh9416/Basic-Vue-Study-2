<template>
    <div align="center">
        <h2>회원게시판 목록</h2>
        <router-link v-if="isAuthorized" :to="{ name: 'BoardRegisterPage' }">새로만들기</router-link>
        <board-list :boards="boards"/>
    </div>
</template>

<script>
import BoardList from '@/components/board/BoardList'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'BoardListPage',
    components: { BoardList },
    computed: {
        ...mapGetters(['isAuthorized']),
        ...mapState(['boards'])
    },
    mounted(){
        this.fetchBoardList()
    },
    methods: {
        ...mapActions(['fetchBoardList'])
    }
}
</script>