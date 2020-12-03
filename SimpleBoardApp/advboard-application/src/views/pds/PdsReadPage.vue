<template>
   <div align="center">
       <h2>공개자료실 상세보기</h2>
       <pds-read v-if="pdsItem && attachments"
            :pdsItem="pdsItem"
            :attachments="attachments"/>
        <p v-else>loading...</p>
        <template v-if="isAdmin">
            <router-link :to="{ name: 'PdsModifyPage', params: { itemId }}">편집</router-link>
            <button @click="onDelete">삭제</button>
        </template>
        <router-link :to="{ name: 'PdsListPage' }">목록</router-link>
    </div> 
</template>

<script>
import api from '@/api'
import PdsRead from '@/components/pds/PdsRead'
import {mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'PdsReadPage',
    components: { PdsRead },
    props: {
        itemId: {
            type: String, 
            required: true
        }
    },
    computed: {
        ...mapGetters(['isAdmin']),
        ...mapState(['pdsItem','attachments'])
    },
    created(){
        this.fetchPds(this.itemId)
        .catch( err => {
            alert('오류로 인하여 해당 자료의 정보를 조회할 수 없었습니다.')
            console.log(err.response.data.message)
            this.$route.back()
        })
    },
    methods: {
        onDelete(){
            const { itemId } = this.pdsItem
            api.delete(`/pds/${itemId}`)
            .then(res => {
                alert('삭제가 완료되었습니다.')
                this.$router.push({name: 'PdsListPage'})
            })
            .catch(err => {
                alert('오류로 인하여 삭제에 실패하였습니다.')
                console.log(err.response.data.message)
            })
        },
        ...mapActions(['fetchPds'])
    }
}
</script>