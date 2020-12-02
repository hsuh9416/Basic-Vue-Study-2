<template>
    
</template>

<script>
import BoardList from '@/components/board/BoardList'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'BoardListPage',
    components: { BoardList},
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