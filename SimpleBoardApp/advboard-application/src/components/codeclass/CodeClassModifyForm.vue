<template>
    
</template>

<script>
export default {
    name: 'CodeClassModifyForm',
    props: {
        codeClass: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            groupName: ''
        }
    },
    methods:{
        onSubmit(){

        }
    },
    created() {
        // 전달받은 codeclass의 그룹명을 바인딩 데이터에 대입
        this.groupName = this.codeClass.groupName
    }
}
</script>