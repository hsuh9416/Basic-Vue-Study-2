<template>
    <form @submit.prevent="submit">
       <table>
           <tr>
               <td>아이디</td>
               <td><input type="text" v-model="userid"></td>
           </tr>
           <tr>
               <td>비밀번호</td>
               <td><input type="password" v-model="password"></td>
           </tr>
           <tr>
               <td colspan="2" align="center">
                   <button type="submit">로그인</button>
                </td>
           </tr>
       </table>
    </form>
</template>

<script>
export default {
    name : 'SigninForm',
    data() {
        return {
            userid: '',
            password: ''
        }
    },
    methods: {
        submit(){
            const { userid, password } = this
            this.$emit('submit', { userid, password })
        }
    }
}
</script>