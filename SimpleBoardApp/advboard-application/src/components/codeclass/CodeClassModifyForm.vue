<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>코드그룹코드</td>
                <td>
                    <input :value="codeClass.groupCode" type="text" disabled>
                </td>
            </tr>
            <tr>
                <td>코드그룹명</td>
                <td>
                    <input v-model="groupName" type="text">
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name: 'CodeClassReadPage', params: { groupCode: codeClass.groupCode }}">취소</router-link>
        </div>
    </form>
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
            const { groupName } = this
            this.$emit('submit', { groupName })
        }
    },
    created() {
        // 전달받은 codeclass의 그룹명을 바인딩 데이터에 대입
        this.groupName = this.codeClass.groupName
    }
}
</script>