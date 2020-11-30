<template>
    
</template>

<script>
import api from '@/api'
import MemberModifyForm from '@/components/member/MemberModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'MemberModifyPage',
    components: { MemberModifyForm },
    props: {
        userNo: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState(['member', 'jobCodes'])
    },
    created(){
        this.fetch.JobCodeList()
    },
    methods: {
        onSubmit( payload ){

        },
        ...mapActions([
            'fetchJobCodeList',
            'fetchMember'
        ])
    }
}
</script>