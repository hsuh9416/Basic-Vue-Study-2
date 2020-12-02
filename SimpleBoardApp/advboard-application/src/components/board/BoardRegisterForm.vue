<template>
    
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'BoardRegisterForm',
    data(){
        return {
            title: '',
            content: ''
        }
    },
    computed: {
        ...mapState(['myInfo']),
        ...mapGetters(['isAuthorized'])
    },
    methods: {
        onSubmit(){
            
        }
    }
}
</script>