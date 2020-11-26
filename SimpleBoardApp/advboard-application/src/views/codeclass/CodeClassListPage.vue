<template>
    
</template>

<script>
import CodeClassList from '@/components/codeclass/CodeClassList'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CodeClassListPage',
    components: {},
    computed: {
        ...mapState(['codeClasses'])
    },
    mounted(){
        this.fetchCodeClassList()
    },
    methods: {
        ...mapActions(['fetchCodeClassList'])
    }
}
</script>