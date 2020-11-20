<template>
    <div align="center">
        <h2>상품 상세보기</h2>
        <item-read v-if="item" :item="item"/>
        <p v-else>loading...</p>
        <router-link :to="{ name: 'ItemModifyPage', params: { itemId } }">편집</router-link>
        <button>삭제</button>
        <router-link :to="{ name: 'ItemListPage' }">목록</router-link>
    </div>
</template>

<script>
import ItemRead from '@/components/ItemRead'
import { mapGetters, mapState, mapActions } from 'vuex'
import api from '@/api'
export default {
    name: 'ItemReadPage',
    components: { ItemRead },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState([ 'item' ])
    },
    methods: {
        ...mapActions(['fetchItem'])
    },
    created(){
        this.fetchItem(this.itemId)
        .catch( err => {
            console.log(err.response.data.msg)
            alert('오류로 인하여 페이지를 불러오지 못하였습니다.')
        })
    }
}

</script>