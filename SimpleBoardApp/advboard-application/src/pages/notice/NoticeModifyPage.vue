<template>
    <div align="center">
        <h2>공지사항 수정</h2>
        <notice-modify-form v-if="notice"
            :notice="notice"
            @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
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
        .catch(err=> {
            alert('오류로 인하여 공지사항을 불러들이지 못했습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        ...mapActions([
            'fetchNotice'
        ]),
        onSubmit(payload){
            const { title, content} = payload
            api.put(`/notices/${this.noticeNo}`, { title, content})
            .then(res => {
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'NoticeReadPage',
                    params: { noticeNo: res.data.noticeNo.toString()}
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({name: 'Signin'})
                }else{
                    alert('오류로 인하여 공지 수정에 실패하였습니다.')
                    console.log(err.response.data.message)
                }
            })
        }
    }
}
</script>