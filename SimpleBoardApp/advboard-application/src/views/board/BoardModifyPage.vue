<template>
    
</template>

<script>
import api from '@/api'
import BoardModifyForm from '@/components/board/BoardModifyForm'

export default {
    name: 'BoardModifyPage',
    components: { BoardModifyForm },
    props: {
       boardNo: {
           type: String,
           required: true
        } 
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        onSubmit(payload){
            
        }
    }
}
</script>