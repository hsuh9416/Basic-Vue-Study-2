<template>
    <div>
        <table border="1">
            <tr>
                <td align="center" width="80">번호</td>
                <td align="center" width="320">충전금액</td>
                <td align="center" width="180">등록일시</td>
            </tr>

            <tr v-if="!chargeCoins || (Array.isArray(chargeCoins) && chargeCoins.length === 0)">
                <td colspan="3">List is empty.</td>
            </tr>

            <tr v-else v-for="chargeCoin in chargeCoins" :key="chargeCoin.historyNo">
                <td align="center">{{ chargeCoin.historyNo }}</td>
                <td align="left">{{ chargeCoin.amount }}</td>
                <td aling="center">{{ chargeCoin.regDate }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CoinChargeList',
    props: {
        chargeCoins: {
            type: Array
        }
    }
}
</script>