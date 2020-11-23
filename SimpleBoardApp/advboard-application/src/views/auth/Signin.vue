<template>
    <div align="center">
        <h2>로그인</h2>
        <signin-form></signin-form>
    </div>
</template>

<script>
import SigninForm from '@/components/auth/SigninForm'

export default {
    name: 'Signin',
    components: { SigninForm }
}
</script>