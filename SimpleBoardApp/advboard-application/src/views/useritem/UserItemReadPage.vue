<template>
    <div align="center">
        <h2>구매상품 상세보기</h2>
        <user-item-read v-if="userItem" :userItem="userItem"/>
        <p v-else>loading...</p>
        <router-link :to="{ name: 'UserItemListPage' }">목록</router-link>
    </div>
</template>

<script>
import api from '@/api'
import UserItemRead from '@/components/useritem/UserItemRead'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UserItemReadPage',
    components: { UserItemRead },
    props: {
        userItemNo: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState(['userItem'])
    },
    created(){
        this.fetchUserItem(this.userItemNo)
        .catch(err => {
            alert('오류로 인하여 구매한 상품 내역을 불러오지 못하였습니다.')
            console.log(err.response.data.message)
            this.$router.back()
        })
    },
    methods: {
        ...mapActions(['fetchUserItem'])
    }
}
</script>