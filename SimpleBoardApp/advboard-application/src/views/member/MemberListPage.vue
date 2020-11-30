<template>
    
</template>

<script>
import MemberList from '@/components/member/MemberList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'MemberListPage',
    components: { MemberList },
    computed: {
        ...mapState(['members'])
    },
    mounted(){
        this.fetchMemberList()
    },
    methods: {
        ...mapActions(['fetchMemberList'])
    }
}
</script>