<template>
    <div align="center">
        <h2>상품 상세보기</h2>
        <item-read v-if="item" :item="item"/>
        <p v-else>loading...</p>
        <router-link v-if="isAdmin" :to="{ name: 'ItemModifyPage', params: { itemId }}">편집</router-link>
        <button v-if="isAdmin" @click="onDelete">삭제</button>
        <button v-if="isMember" @click="onBuy">구매</button>
        <router-link :to="{ name: 'ItemListPage' }">목록</router-link>
    </div>
</template>

<script>
import api from '@/api'
import ItemRead from '@/components/item/ItemRead'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'ItemReadPage',
    components: { ItemRead },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['item']),
        ...mapGetters(['isAdmin','isMember'])
    },
    created(){
        this.fetchItem(this.itemId)
        .catch( err => {
            console.log(err.response.data.message)
            alert('오류로 인하여 상품 정보를 호출할 수 없었습니다.')
            this.$router.back()
        })
    },
    methods: {
        onDelete(){
            const { itemId } = this.item
            api.delete(`/items/${itemId}`)
            .then( res =>{
                alert('삭제가 완료되었습니다.')
                this.$router.push({ name: 'ItemListPage' })
            })
            .catch( err => {
                alert('오류로 인하여 상품 삭제에 실패하였습니다.')
                console.log(err.response.data.message)
            })
        },
        onBuy(){
            const { itemId } = this.item
            api.get(`/items/buy/${itemId}`)
            .then( res => {
                alert(res.data)
            })
            .catch( err =>{
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({ name: 'Signin'})
                } else{
                    alert('오류로 인하여 상품을 구매할 수 없습니다.')
                    console.log(err.response.data.message)
                }
            })
        },
        ...mapActions(['fetchItem'])
    }
}
</script>