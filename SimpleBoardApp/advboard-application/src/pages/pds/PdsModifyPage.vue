<template>
    <div align="center">
        <h2>공개자료실 수정</h2>
        <pds-modify-form v-if="pdsItem && attachments"
            :pdsItem="pdsItem"
            :attachments="attachments"
            @submit="onSubmit"
            @attach="onAttach"
            @removeAttach="onRemoveAttach"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>
import api from '@/api'
import PdsModifyForm from '@/components/pds/PdsModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'PdsModifyPage',
    components: { PdsModifyForm },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['pdsItem','attachments'])
    },
    created(){
        this.fetchPds(this.itemId)
    },
    methods: {
        onSubmit(payload){
            const { itemName, description } = payload

            const itemObject = {
                itemId: this.itemId,
                itemName: itemName,
                description: description,
                file: this.attachments
            }

            api.put(`/pds/${this.itemId}`, itemObject)
            .then(res => {
                alert('수정이 완료되었습니다.')
                this.$router.push({
                    name: 'PdsReadPage',
                    params: { itemId: res.data.itemId.toString() }
                })
            })
            .catch( err => {
                alert('오류로 인하여 수정에 실패하였습니다.')
                console.log(err.response.data.messae)
            })
        },
        onAttach(payload){
            const { file } = payload
            this.addAttach(file)
        },
        onRemoveAttach(index){
            this.removeAttach(index)
        },
        ...mapActions(['addAtach', 'resetAttach', 'removeAttach', 'fetchPds'])
    }
}
</script>