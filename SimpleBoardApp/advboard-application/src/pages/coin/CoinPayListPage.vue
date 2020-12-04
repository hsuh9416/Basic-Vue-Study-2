<template>
    <div align="center">
        <h2>구매 내역</h2>
        <coin-pay-list :payCoins="payCoins"/>
    </div>
</template>

<script>
import CoinPayList from '@/components/coin/CoinPayList'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CoinPayListPage',
    components: { CoinPayList },
    computed: {
        ...mapState(['payCoins'])
    },
    mounted(){
        this.fetchPayCoinList()
    },
    methods:{
        ...mapActions(['fetchPayCoinList'])
    }
}
</script>