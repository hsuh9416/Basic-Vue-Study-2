<template>
    <div align="center">
        <h2>코드 목록</h2>
        <router-link :to="{name: 'CodeDetailRegisterPage' }">새로만들기</router-link>
        <code-detail-list :codeDetails="codeDetails"/>
    </div>
</template>

<script>
import CodeDetailList from '@/components/codedetail/CodeDetailList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CodeDetailListPage',
    components: { CodeDetailList },
    computed: {
        ...mapState(['codeDetails'])
    },
    mounted(){
        this.fetchCodeDetailList()
    },
    methods:{
        ...mapActions(['fetchCodeDetailList'])
    }
}
</script>