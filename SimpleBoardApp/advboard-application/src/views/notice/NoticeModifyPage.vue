<template>
    
</template>

<script>
import api from '@/api'
import NoticeModifyForm from '@/components/notice/NoticeModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'NoticeModifyPage',
    components: { NoticeModifyForm },
    props: {
        noticeNo: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['notice'])
    },
    created(){
        this.fetchNotice(this.noticeNo)
    },
    methods: {
        ...mapActions([
            'fetchNotice'
        ]),
        onSubmit(payload){
            
        }
    }
}
</script>