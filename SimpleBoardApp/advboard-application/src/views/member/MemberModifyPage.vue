<template>
    <div align="center">
        <h2>회원 수정</h2>
        <member-modify-form v-if="member && jobCodes"
            :member="member"
            :jobCodes="jobCodes"
            @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
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
        this.fetchJobCodeList()
        .then( res => {
            this.fetchMember(this.userNo)
            .catch( err => {
                alert('오류로 인하여 회원 정보를 호출할 수 없었습니다.')
                console.log(err.response.data.message)
                this.$router.back()               
            })
        })
        .catch( err => {
            alert('오류로 인하여 직업 코드를 호출할 수 없었습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        onSubmit( payload ){
            api.put(`/users/${this.userNo}`,payload)
            .then( res =>{
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'MemberReadPage',
                    params: { userNo: res.data.userNo }
                })
                .catch( err =>{
                    alert('오류로 인하여 정보를 수정할 수 없었습니다.')
                    console.log(err.response.data.message)
                })
            })
        },
        ...mapActions([
            'fetchJobCodeList',
            'fetchMember'
        ])
    }
}
</script>