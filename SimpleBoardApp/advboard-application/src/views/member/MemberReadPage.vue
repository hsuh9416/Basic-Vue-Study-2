<template>
    <div align="center">
        <h2>회원 상세보기</h2>
        <member-read v-if="member && jobCodes"
            :member="member"
            :jobCodes="jobCodes"/>
        <p v-else>loading...</p>
        <router-link :to="{ name: 'MemberModifyPage', params: { userNo }}">편집</router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to="{ name: 'MemberListPage'}">목록<router-link>
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
        onDelete(){
            const { userNo } = this.member
            api.delete(`/users/${userNo}`)
            .then(res =>{
                alert('회원 정보가 정상적으로 삭제 되었습니다.')
                this.$router.push({
                    name: 'MemberListPage'
                })
            })
            .catch( err => {
                alert('오류로 인하여 회원 정보를 삭제할 수 없었습니다.')
                console.log(err.response.data.message)
            })
        },
        ...mapActions([
            'fetchMember',
            'fetchJobCodeList'
        ])
    }
}
</script>