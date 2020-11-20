<template>
    <div align="center">
        <h2>상품 등록</h2>
        <item-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import ItemRegisterForm from '@/components/ItemRegisterForm'
import { mapState, mapActions } from 'vuex'
import api from '@/api'
export default {
    name: 'ItemRegisterPage',
    components: {
        ItemRegisterForm
    },
    methods: {
        onSubmit(payload){
            const { itemName, price, description, file } = payload
            const itemObject = {
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
                alert('파일이 정상적으로 등록되었습니다.')
                this.$router.push({
                    name: 'ItemReadPage',
                    params: { itemId: res.data.itemId }
                })
            }).catch( err => {
                console.log(err.response.data.msg)
                alert('오류 발생으로 파일 업로드에 실패하였습니다.')
            })
        }
    }

}
</script>