<template>
    <div align="center">
        <h2>충전 내역</h2>
        <coin-charge-list :chargeCoins="chargeCoins"/>
    </div>
</template>

<script>
import CoinChargeList from '@/components/coin/CoinChargeList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CoinChargeListPage',
    components: { CoinChargeList },
    computed: {
        ...mapState(['chargeCoins'])
    },
    mounted(){
        this.fetchChargeCoinList()
    },
    methods:{
        ...mapActions(['fetchChargeCoinList'])
    }
}
</script>