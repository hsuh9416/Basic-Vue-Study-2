<template>
    
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
    },
    methods: {
        onDelete(){

        },
        ...mapActions([
            'fetchBoard'
        ])
    }
}
</script>