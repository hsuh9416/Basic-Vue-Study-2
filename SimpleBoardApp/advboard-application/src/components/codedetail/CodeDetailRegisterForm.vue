<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>그룹코드</td>
                <td>
                    <select v-model="groupCode">
                        <option v-for="codeClass in codeClasses" :value="codeClass.groupCode" :key="codeClass.groupCode">
                            {{codeClass.groupName}}
                        </option> 
                    </select>
                </td>
            </tr>
            <tr>
                <td>코드값</td>
                <td>
                    <input v-model="codeValue" type="text">
                </td>
            </tr>
            <tr>
                <td>코드명</td>
                <td>
                    <input v-model="codeName" type="text">
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name: 'CodeDetailListPage'}">목록</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CodeDetailRegisterForm',
    props:{
        codeClasses: {
            type: Array
        }
    },
    data(){
        return {
            groupCode: 'A01',
            codeValue: '',
            codeName: ''
        }
    },
    methods: {
        onSubmit(){
            const { groupCode, codeValue, codeName } = this
            this.$emit('submit', { groupCode, codeValue, codeName })
        }
    }
}
</script>