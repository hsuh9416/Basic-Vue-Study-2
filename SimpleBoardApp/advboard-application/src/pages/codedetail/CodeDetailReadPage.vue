<template>
    <div align="center">
        <h2>코드 상세보기</h2>
        <code-detail-read v-if="codeDetail && codeClasses"
            :codeDetail="codeDetail"
            :codeClasses="codeClasses"/>
        <router-link :to="{ name: 'CodeDetailModifyPage', params: { groupCode, codeValue }}">
            편집
        </router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to="{name: 'CodeDetailListPage'}">목록</router-link>
    </div>
</template>

<script>
import api from '@/api'
import CodeDetailRead from '@/components/codedetail/CodeDetailRead'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeDetailReadPage',
    components: { CodeDetailRead },
    props: {
        groupCode: {
            type: String,
            required: true
        },
        codeValue: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState([
            'codeClasses',
            'codeDetail'
        ])
    },
    created(){
        // this =>
        const { groupCode, codeValue } = this

        this.fetchCodeClassList()
        .then( res => {
            this.fetchCodeDetail({ groupCode, codeValue })
            .catch( err => {
                alert('오류로 인하여 불러 들이는데 실패하였습니다.')
                console.log(err.response.data.message)
                this.$router.back()
            })
        })
        .catch( err => {
            alert('오류로 인하여 불러 들이는데 실패하였습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        onDelete(){
             const { groupCode, codeValue } = this.codeDetail
             api.delete(`/codedetails/${groupCode}/${codeValue}`)
             .then( res => {
                 alert('삭제가 완료되었습니다.')
                 this.$router.push({ name: 'CodeDetailListPage'})
             })
             .catch(err => {
                    if(err.response.status === 401){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin'})
                    }
                    else {
                        alert('오류로 인하여 삭제에 실패하였습니다.')
                        console.log(err.response.data.message)
                    }
                })
        },
        ...mapActions([
            'fetchCodeClassList',
            'fetchCodeDetail'
        ])
    }
}
</script>