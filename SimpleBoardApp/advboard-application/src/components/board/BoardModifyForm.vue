<template>
    
</template>

<script>
export default {
    name: 'BoardModifyForm',
    props: {
        board: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        onSubmit(){

        }
    },
    created(){
        this.title = this.board.title
        this.content = this.board.content
    }
}
</script>