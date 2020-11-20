<template>
    <div align="center">
        <h2>상품 수정</h2>
        <item-modify-form v-if="item" :item="item" @submit="onSubmit"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>

import ItemModifyForm from '../components/ItemModifyForm.vue'
import { mapState, mapActions } from 'vuex'
import api from '@/api'

export default {
    name: 'ItemModifyPage',
    components: { ItemModifyForm },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState([ 'item' ])
    },
    methods: {
        ...mapActions(['fetchItem']),
        onSubmit( payload ){
            const { itemName, price, description, file } = payload
            const itemObject = {
                itemId: this.itemId,
                itemName :itemName,
                price: price,
                description: description
            }

            let formData = new FormData()

            formData.append("file", file)
            formData.append("item", JSON.stringify(itemObject))

            api.post('./items', formData,{
                headers: {
                    // multipart 형식으로 지정
                    'Content-Type': 'multipart/form-data'
                }
            }).then( res => {
                alert('파일이 정상적으로 수정되었습니다.')
                this.$router.push({
                    name: 'ItemReadPage',
                    params: { itemId: res.data.itemId.toString() }
                })
            }).catch( err => {
                console.log(err.response.data.msg)
                alert('오류 발생으로 파일 수정에 실패하였습니다.')
            })
        }
    },
    created(){
        this.fetchItem(this.itemId)
        .catch( err => {
            console.log(err.response.data.msg)
            alert('오류로 인하여 페이지를 불러오지 못하였습니다.')
            this.$router.back()
        })
    }
}
</script>