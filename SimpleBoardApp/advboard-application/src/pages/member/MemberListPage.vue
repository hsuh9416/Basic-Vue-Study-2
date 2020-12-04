<template>
    <div align="center">
        <h2>회원 목록</h2>
        <router-link :to="{name: 'MemberRegisterPage'}">새로만들기</router-link>
        <member-list :members="members"/>
    </div>
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