<template>
    <div>
    <table boarder="1">
        <tr>
            <td align="center" width="80">번호</td>
            <td align="center" width="120">상품명</td>
            <td align="center" width="120">구매금액</td>
            <td align="center" width="180">등록일시</td>
        </tr>
        <tr v-if="!payCoins || (Array.isArray(payCoins) && payCoins.length === 0)">
            <td colspan="4">List is empty.</td>
        </tr>
        
        <tr v-else v-for="payCoin in payCoins" :key="payCoin.historyNo">
            <td align="center">{{ payCoin.historyNo }}</td>
            <td align="left">{{ payCoin.itemName }}</td>
            <td align="left">{{ payCoin.amount }}</td>
            <td align="center">{{ paycoin.regData }}</td>
        </tr>
    </table>
</div>  
</template>

<script>
export default {
    name: 'CoinPayList',
    props: {
        payCoins: {
            type: Array
        }
    }
}
</script>