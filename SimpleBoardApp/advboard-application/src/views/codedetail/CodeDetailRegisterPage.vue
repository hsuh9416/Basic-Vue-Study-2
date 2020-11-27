<template>
    <div align="center">
        <h2>코드 등록</h2>
        <!-- :propsForSubComponent="GivenStateName"-->
        <code-detail-register-form @submit="onSubmit" :codeClasses="codeClasses"/>
    </div>
</template>

<script>
import api from '@/api'
import CodeDetailRegisterForm from '@/components/codedetail/CodeDetailRegisterForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: ' { CodeDetailRegisterForm }',
    components: { CodeDetailRegisterForm },
    computed: {
        ...mapState([
            'codeClasses'
        ])
    },    
    created(){
        this.fetchCodeClassList()
        .catch( err => {
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        onSubmit( payload){
            const { groupCode, codeValue, codeName } = payload
            api.post('/codedetails', { groupCode, codeValue, codeName })
            .then( res => {
                alert('등록이 완료되었습니다.')
                this.$router.push({
                    name: 'CodeDetailReadPage',
                    params: {
                        groupCode: res.data.groupCode, codeValue: res.data.codeValue
                    }
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({ name: 'Signin'})
                }
                else {
                    alert('오류로 인하여 등록에 실패하였습니다.')
                    console.log(err.response.data.message)
                }
            })
        },
        ...mapActions([
            'fetchCodeClassList'
        ])
    }
}
</script>