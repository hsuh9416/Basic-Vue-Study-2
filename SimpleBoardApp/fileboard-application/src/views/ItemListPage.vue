<template>
    <div align="center">
        <h2>상품 목록</h2>
        <router-link :to="{ name: 'ItemRegisterPage' }">새로 만들기</router-link>
        
        <item-list :items="items"/>
    </div>
</template>

<script>
import ItemList from '@/components/ItemList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ItemListPage',
    components: {
        ItemList
    },
    computed: {
        ...mapState([ 'items' ])
    },
    methods: {
        ...mapActions(['fetchItemList'])
    },
    mounted(){
        this.fetchItemList()
    }
}
</script>