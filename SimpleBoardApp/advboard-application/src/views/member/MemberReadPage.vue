<template>
    <div align="center">
        <h2>회원 등록</h2>
        <member-register-form @submit="onSubmit" :jobCodes="jobCodes"/>
    </div>

</template>

<script>
import api from '@/api'
import MemberRead from '@/components/member/MemberRead'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'MemberReadPage',
    components: { MemberRead },
    props: {
        userNo: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState([
            'member', 'jobCodes'
        ])
    },
    created(){
        this.fetchJobCodeList()
        .catch( err => {
            alert('오류로 인하여 직업 코드를 호출할 수 없었습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        onDelete(){

        },
        ...mapActions([
            'fetchMember',
            'fetchJobCodeList'
        ])
    }
}
</script>