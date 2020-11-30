<template>
    <div align="center">
        <h2>코드 수정</h2>
        <code-detail-modify-form v-if="codeClasses && codeDetail"
            :codeDetail="codeDetail"
            :codeClasses="codeClasses"
            @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>
import api from '@/api'
import CodeDetailModifyForm from '@/components/codedetail/CodeDetailModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeDetailModifyPage',
    components: { CodeDetailModifyForm },
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
        ...mapState(['codeClasses', 'codeDetail'])
    },
    created(){
        this.fetchCodeClassList()
        .then( res => {
            const {groupCode, codeValue} = this

            this.fetchCodeDetail({groupCode, codeValue})
            .catch( err => {
                alert('오류로 인하여 수정에 실패하였습니다.')
                console.log(err.response.data.message)
                this.$router.back()
            })
        })
        .catch( err => {
            alert('오류로 인하여 수정에 실패하였습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        ...mapActions([
            'fetchCodeClassList',
            'fetchCodeDetail'
        ]),
        onSubmit( payload ){
            const {codeValue, codeName } = payload
            api.put(`/codedetails/${this.groupCode}/${this.codeValue}`,{codeValue, codeName })
            .then( res => {
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'CodeDetailReadPage',
                    params: { 
                        groupCode: res.data.groupCode,
                        codeValue: res.data.codeValue
                    }
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin'})
                    }
                    else {
                        alert('오류로 인하여 수정에 실패하였습니다.')
                        console.log(err.response.data.message)
                    }
                })
            })
        }
    }
}
</script>