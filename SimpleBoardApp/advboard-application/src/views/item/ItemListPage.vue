<template>
    
</template>

<script>
import ItemList from '@/components/item/ItemList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'ItemListPage',
    components: { ItemList },
    computed: {
        ...mapState(['items']),
        ...mapGatters(['isAdmin'])
    },
    mounted(){
        this.fetchItemList()
    },
    methods: {
        ...mapActions(['fetchItemList'])
    }
}
</script>