<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>그룹코드</td>
                <td>
                    <select v-model="groupCode" :value="codeDetail.groupCode" disabled>
                        <option v-for="codeClass in codeClasses" :value="codeClass.groupCode" :key="codeClass.groupCode">
                            {{ codeClass.groupName }}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>코드값</td>
                <td>
                    <input v-model="codeValue" type="text"/>
                </td>
            </tr>
            <tr>
                <td>코드명</td>
                <td>
                    <input v-model="codeName" type="text"/>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name: 'CodeDetailReadPage', params: { groupCode: codeDetail.groupCode, codeValue: codeDetail.codeValue }}">취소</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CodeDetailModifyForm',
    props: {
       codeClasses: {
           type: Array
       },
       codeDetail: {
           type: Object,
           required: true
       }
    },
    data(){
        return {
            groupCode: '',
            codeValue: '',
            codeName: ''
        }
    },
    methods: {
        onSubmit(){
            const { groupCode, codeValue, codeName } = this
            this.$emit('submit', { groupCode, codeValue, codeName })
        },
        created(){
            this.groupCode = this.codeDetail.groupCode
            this.codeValue = this.codeDetail.codeValue
            this.codeName = this.codeDetail.codeName
        }
    }
    
}
</script>