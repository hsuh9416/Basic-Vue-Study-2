<template>
    <div align="center">
        <h2>코드그룹 목록</h2>
        <router-link :to="{ name: 'CodeClassRegisterPage'}">새로만들기</router-link>
        <code-class-list :codeClasses="codeClasses"/>
    </div>
</template>

<script>
import CodeClassList from '@/components/codeclass/CodeClassList'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CodeClassListPage',
    components: { CodeClassList },
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