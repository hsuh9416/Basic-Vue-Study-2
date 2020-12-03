<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>충전금액</td>
                <td>
                    <input type="text" v-model="amount">
                </td>
            </tr>
        </table>

        <div>
            <button type="submit">충전하기</button>
            <router-link :to="{ name: 'CoinChargeListPage' }">충전내역</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CoinChargeRegisterForm',
    data(){
        return {
            amount:''
        }
    },
    methods: {
        onSubmit(){
            const { amount } = this
            this.$emit('submit', { amount })
        }
    }
}
</script>