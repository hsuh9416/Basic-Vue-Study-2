<template>
    <div>
        <table>
            <tr>
                <td>그룹코드</td>
                <td>
                    <select :value="codeDetail.groupCode" disabled>
                        <option v-for="codeClass in codeClasses" :value="codeClass.groupCode" :key="codeClass.groupCode">
                            {{ codeClass.groupName }}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>코드값</td>
                <td><input type="text" :value="codeDetail.codeValue" readonly></td>
            </tr>
            <tr>
                <td>코드명</td>
                <td><input type="text" :value="codeDetail.codeName" readonly></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CodeDetailRead',
    props: {
        codeClasses: {
            type: Array
        },
        codeDetail: {
            type: Object,
            required: true
        }
    }
}
</script>