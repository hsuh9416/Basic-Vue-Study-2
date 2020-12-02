<template>
    
</template>

<script>
import NoticeList from '@/components/notice/NoticeList'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'NoticeListPage',
    components: {NoticeList},
    computed: {
        ...mapGetters(['isAdmin']),
        ...mapState(['notices'])
    },
    mounted(){
        this.fetchNoticeList()
    },
    methods:{
        ...mapActions(['fetchNoticeList'])
    }
}
</script>