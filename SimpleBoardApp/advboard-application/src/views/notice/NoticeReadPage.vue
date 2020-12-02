<template>
    
</template>

<script>
import api from '@/api'
import NoticeRead from '@/components/notice/NoticeRead'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'NoticeReadPage',
    components: {NoticeRead },
    props: {
        noticeNo: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters(['isAdmin']),
        ...mapState(['notice'])
    },
    created(){
        this.fetchNotice(this.noticeNo)
    },
    methods: {
        onDelete(){

        },
        ...mapActions(['fetchNotice'])
    }
}
</script>