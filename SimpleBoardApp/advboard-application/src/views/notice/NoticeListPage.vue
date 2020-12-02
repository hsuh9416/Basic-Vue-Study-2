<template>
    <div align="center">
        <h2>공지사항 목록</h2>
        <router-link v-if="isAdmin" :to="{ name: 'NoticeRegisterPage'}">새로만들기</router-link>
        <notice-list :notices="notices"/>
    </div>
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