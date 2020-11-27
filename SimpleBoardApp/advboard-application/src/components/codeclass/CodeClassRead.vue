<template>
    <div>
        <table>
            <tr>
                <td>코드그룹코드</td>
                <td>
                    <input type="text" :value="codeClass.groupCode" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>코드그룹명</td>
                <td>
                    <input type="text" :value="codeClass.groupName" readonly="readonly">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CodeClassRead',
    props: {
        codeClass: {
            type: Object,
            required: true
        }
    }
}
</script>