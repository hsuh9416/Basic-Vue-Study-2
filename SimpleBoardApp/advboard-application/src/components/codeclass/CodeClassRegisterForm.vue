<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>그룹코드</td>
                <td>
                    <input v-modal="groupCode" type="text">
                </td>
            </tr>
            <tr>
                <td>그룹코드명</td>
                <td>
                    <input v-model="groupName" type="text">
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name: 'CodeClassListPage'}">목록</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CodeClassRegisterForm',
    data(){
        return {
            groupCode: '',
            groupName: ''
        }
    },
    methods: {
        onSubmit(){
            const { groupCode, groupName } = this
            this.$emit('submit', { groupCode, groupName })
        }
    }
}
</script>