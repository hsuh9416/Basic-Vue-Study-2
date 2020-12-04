<template>
    <div align="center">
        <h2>코드그룹 수정</h2>
        <code-class-modify-form v-if="codeClass" :codeClass="codeClass" @submit="onSubmit" />
        <p v-else>loading...</p>
    </div>
</template>

<script>
import api from '@/api'
import CodeClassModifyForm from '@/components/codeclass/CodeClassModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeClassModifyPage',
    components: { CodeClassModifyForm },
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
            alert('오류로 인하여 수정에 실패하였습니다.')
            this.$router.back()
        })
    },
    methods: {
        ...mapActions(['fetchCodeClass']),
        onSubmit(payload){
            const { groupName } = payload
            api.put(`/codegroups/${this.groupcode}`,{ groupName })
            .then( res => {
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'CodeClassReadPage',
                    params: { groupCode: res.data.groupCode }
                })
            })
            .catch( err => {
                    if (err.response.status === 401 ){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin '})
                    } 
                    else {
                        console.log(err.response.data.message)
                        alert('오류로 인하여 등록에 실패하였습니다.')
                    }
            })
        }
    }
}
</script>