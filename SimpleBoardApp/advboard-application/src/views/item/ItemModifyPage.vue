<template>
    
</template>

<script>
import api from '@/api'
import ItemModifyForm from '@/components/item/ItemModifyForm'
import { mapState, mapActions } from 'vuex'

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
        ...mapState(['item'])
    },
    created(){
        this.fetchItem(this.itemId)
    },
    methods: {
        ...mapActions(['fetchItem']),
        onSubmit(payload){
            
        }
    }
}
</script>