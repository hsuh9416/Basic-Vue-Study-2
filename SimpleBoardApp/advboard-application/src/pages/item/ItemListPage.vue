<template>
    <div align="center">
        <h2>상품 목록</h2>
        <template v-if="isAdmin">
            <router-link :to="{ name: 'ItemRegisterPage' }">새로만들기</router-link>
        </template>
        <item-list :items="items"/>
    </div>
</template>

<script>
import ItemList from '@/components/item/ItemList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'ItemListPage',
    components: { ItemList },
    computed: {
        ...mapState(['items']),
        ...mapGetters(['isAdmin'])
    },
    mounted(){
        this.fetchItemList()
    },
    methods: {
        ...mapActions(['fetchItemList'])
    }
}
</script>