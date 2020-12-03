<template>
    
</template>

<script>
import api from '@/api'
import ItemRead from '@/components/item/ItemRead'

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
    },
    methids: {
        onDelete(){

        },
        ...mapActions(['fetchItem'])
    }
}
</script>