<template>
    <div align="center">
        <h2>공지사항 등록</h2>
        <notice-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import api from '@/api'
import NoticeRegisterForm from '@/components/notice/NoticeRegisterForm'

export default {
    name: 'NoticeRegisterPage',
    components: { NoticeRegisterForm },
    methods:{
        onSubmit( payload ){
            const { title, content } = payload
            api.post('/notices', { title, content })
            .then(res => {
                alert('등록이 완료되었습니다.')
                this.$router.push({
                    name: 'NoticeReadPage',
                    params: { noticeNo: res.data.noticeNo.toString() }
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({name: 'Signin'})
                }else{
                    alert('오류로 인하여 공지 등록에 실패하였습니다.')
                    console.log(err.response.data.message)
                }
            })
        }
    }
}
</script>