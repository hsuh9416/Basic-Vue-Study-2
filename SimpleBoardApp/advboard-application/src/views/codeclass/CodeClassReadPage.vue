<template>
    <div align="center">
        <h2>코드그룹 상세보기</h2>
        <code-class-read v-if="codeClass" :codeClass="codeClass"/>
        <router-link :to="{ name: 'CodeClassModifyPage', params: { groupCode } }">
            편집
        </router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to=" { name: 'CodeClassListPage'}">목록</router-link>
</template>

<script>
import api from '@/api'
import CodeClassRead from '@/components/codeclass/CodeClassRead'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeClassReadPage',
    components: { CodeClassRead },
    props: {
        groupCode: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['codeClass'])
    },
    created(){
        this.fetchCodeClass(this.groupCode)
        .catch( err => {
            console.log(err.response.data.message)
            alert('오류로 인하여 코드를 불러올 수 없었습니다.')
            this.$router.back()
        })
    },
    methods:{
        onDelete(){
            const { groupCode } = this.codeClass
            api.delete(`/codegroups/${groupCode}`)
            .then( res => {
                alert('삭제가 완료되었습니다.')
                this.$router.push({ name: 'CodeClassListPage '})
            })
            .catch( err => {
                if (err.response.status === 401 ){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin '})
                } 
                else {
                    console.log(err.response.data.message)
                    alert('오류로 인하여 삭제에 실패하였습니다.')
                }
            })
        },
        ...mapActions(['fetchCodeClass'])
    }
}
</script>