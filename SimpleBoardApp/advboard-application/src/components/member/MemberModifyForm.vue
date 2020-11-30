<template>
    
</template>
<script>
export default {
    name: 'MemberModifyForm',
    props: {
        member: {
            type: Object,
            required: true
        },
        jobCodes: {
            type: Array
        }
    },
    data(){
        return {
            userId: '',
            userName: '',
            userPw: '',
            job: '',
            auth1: '',
            auth2: '',
            auth3: ''
        }
    },
    methods: {
        onSubmit() {

        }
    },
    created(){
        this.userId = this.member.userId
        this.userName = this.member.userName
        this.userPw = this.memberuserPw
        this.job = this.member.job

        if(this.member.authList[0]){
            this.auth1 = this.member.authList[0].auth
        }

        if(this.member.authList[1]){
            this.auth2 = this.member.authList[1].auth
        }

        if(this.member.authList[2]){
            this.auth3 = this.member.authList[2].auth
        }
    }
}
</script>