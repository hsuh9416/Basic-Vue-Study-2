<template>
    
</template>

<script>
import api from '@/api'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeClassModifyPage',
    components: { CodeClassModifyForm },
    props: {
        groupCode: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState('codeClass')
    },
    created(){
        this.fetchCodeClass(this.groupCode)
    },
    methods: {
        ...mapActions(['fetchCodeClass']),
        onSubmit(payload){
            
        }
    }
}
</script>