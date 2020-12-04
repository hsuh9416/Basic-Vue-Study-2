<template>
    <div align="center">
        <h2>공개자료실 등록</h2>
        <pds-register-form @submit="onSubmit"
            @attach="onAttach"
            @removeAttach="onRemoveAttach"
            :attachments="attachments"/>
    </div>
</template>

<script>
import api from '@/api'
import PdsRegisterForm from '@/components/pds/PdsRegisterForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'PdsRegisterPage',
    components: { PdsRegisterForm },
    computed: {
        ...mapState(['attachments'])
    },
    created(){
        this.resetAttach()
    },
    methods: {
        onSubmit(payload){
            const { itemName, description } = payload

            const itemObject = {
                itemName: itemName,
                description: description,
                file: this.attachments
            }

            api.post('/pds', itemObject)
            .then(res => {
                alert('등록이 완료되었습니다.')
                this.$router.push({
                    name: 'PdsReadPage',
                    params: { itemId: res.data.itemId.toString() }
                })
            })
            .catch( err => {
                console.log(err)
                alert('오류로 인하여 등록에 실패하였습니다.')
                
            })
        },
        onAttach( payload ){
            const { file } = payload
            this.addAttach(file)
        },
        onRemoveAttach(index){
            this.removeAttach(index)
        },
        ...mapActions(['addAttach','resetAttach','removeAttach'])
    }
}
</script>