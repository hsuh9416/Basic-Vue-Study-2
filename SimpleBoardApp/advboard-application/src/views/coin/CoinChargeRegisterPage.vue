<template>
    <div align="center">
        <h2>코인 충전</h2>
        <coin-charge-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import api from '@/api'
import CoinChargeRegisterForm from '@/components/coin/CoinChargeRegisterForm'

export default {
    name: 'CoinChargeRegisterPage',
    components: { CoinChargeRegisterForm },
    methods: {
        onSubmit( payload ){
            const { amount } = payload
            api.post(`/coins/charge/${amount}`,{ amount })
            .then( res => {
                console.log(res.data)
                this.$router.push({
                    name: 'CoinChargeListPage'
                })
            })
            .catch( err => {
                if(err.response.status === 401){
                    alert('로그인이 필요합니다.')
                    this.$router.push({ name: 'Signin' })
                } else {
                    console.log(err.response.data.message)
                    alert('오류로 인하여 코인 충전에 실패하였습니다.')
                }
            })
        }
    } 
}
</script>