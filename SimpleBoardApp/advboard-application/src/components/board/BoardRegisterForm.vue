<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>제목</td>
                <td>
                    <input type="text" v-model="title">
                </td>
            </tr>
            <tr>
                <td>작성자</td>
                <td>
                    <input type="text" :value="myinfo.userId" disabled>
                </td>
            </tr>
            <tr>
                <td>내용</td>
                <td>
                    <textarea v-model="content" rows="5"></textarea>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit" v-if="isAuthorized">등록</button>
            <router-link :to="{ name: 'BoardListPage' }"></router-link>
        </div>
    </form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'BoardRegisterForm',
    data(){
        return {
            title: '',
            content: ''
        }
    },
    computed: {
        ...mapState(['myinfo']),
        ...mapGetters(['isAuthorized'])
    },
    methods: {
        onSubmit(){
            const { title, content } = this
            this.$emit('submit', { title, content })
        }
    }
}
</script>