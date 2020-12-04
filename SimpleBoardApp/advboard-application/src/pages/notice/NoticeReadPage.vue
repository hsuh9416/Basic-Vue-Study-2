<template>
    <div align="center">
        <h2>공지사항 상세보기</h2>
        <notice-read v-if="notice" :notice="notice"/>
        <p v-else>loading...</p>
        <template v-if="isAdmin">
            <router-link :to="{name: 'NoticeModifyPage', params: { noticeNo }}">편집</router-link>
            <button @click="onDelete">삭제</button>
        </template>
        <router-link :to="{name: 'NoticeListPage'}">목록</router-link>
    </div>
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
        .catch(err=> {
            alert('오류로 인하여 공지사항을 불러들이지 못했습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        onDelete(){
            const { noticeNo } = this.notice
            api.delete(`/notices/${noticeNo}`)
            .then(res => {
                alert('공지 삭제가 완료되었습니다.')
                this.$router.push({
                    name: 'NoticeListPage'
                })
            })
            .catch(err=> {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({name: 'Signin'})
                }else{
                    alert('오류로 인하여 공지 삭제에 실패하였습니다.')
                    console.log(err.response.data.message)
                }
            })
        },
        ...mapActions(['fetchNotice'])
    }
}
</script>