<template>
    
</template>

<script>
import api from '@/api'
import MemberRegisterForm from '@/components/member/MemberRegisterForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'MemberRegisterPage',
    components: { MemberRegisterForm },
    computed: {
        ...mapState([
            'jobCodes'
        ])
    },
    created(){
        this.fetchJobCodeList()
    },
    methods:{
        onSubmit(payload){

        },
        ...mapActions([
            'fetchJobCodeList'
        ])
    }
}
</script>