<template>
    
</template>

<script>
import api from '@/api'
import CodeClassRead from '@/components/codeclass/CodeClassRead'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeClassReadPage',
    components: { CodeClassRead },
    props: {
        groupCode: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['codeClass'])
    },
    created(){
        this.fetchCodeClass(this.groupCode)
    },
    methods:{
        onDelete(){

        },
        ...mapActions(['fetchCodeClass'])
    }
}
</script>