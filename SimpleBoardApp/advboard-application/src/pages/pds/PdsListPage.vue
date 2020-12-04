<template>
    <div align="center">
        <h2>공개자료실 목록</h2>
        <router-link v-if="isAdmin" :to="{ name: 'PdsRegisterPage' }">새로만들기</router-link>
        <pds-list :pdsItems="pdsItems"/>
    </div>
</template>

<script>
import PdsList from '@/components/pds/PdsList'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'PdsListPage',
    components: { PdsList },
    computed: {
        ...mapGetters(['isAdmin']),
        ...mapState(['pdsItems'])
    },
    mounted(){
        this.fetchPdsList()
    },
    methods: {
        ...mapActions(['fetchPdsList'])
    }
}
</script>