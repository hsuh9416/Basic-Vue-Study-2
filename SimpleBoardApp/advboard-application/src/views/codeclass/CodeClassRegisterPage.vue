<template>
    <div align="center">
        <h2>코드그룹 등록</h2>

        <code-class-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import api from '@/api'
import CodeClassRegisterForm from '@/components/codeclass/CodeClassRegisterForm'

export default {
    name: 'CodeClassRegisterPage',
    components: { CodeClassRegisterForm },
    methods: {
        onSubmit( payload ){
            const { groupCode, groupName } = payload
            api.post('/codegroups', { groupCode, groupName })
            .then( res => {
                alert('등록이 완료되었습니다.')
                this.$router.push({
                    name: 'CodeClassReadPage',
                    params: { groupCode: res.data.groupCode }
                })
                .catch( err => {
                    if (err.response.status === 401 ){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin '})
                    } else {
                        console.log(err.response.data.message)
                        alert('오류로 인하여 등록에 실패하였습니다.')
                    }
                })
            })
        }
    }
}
</script>