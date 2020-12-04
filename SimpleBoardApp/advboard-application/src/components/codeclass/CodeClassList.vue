<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="160">코드그룹코드</th>
                <th align="center" width="160">코드그룹명</th>
                <th align="center" width="180">등록일시</th>
            </tr>
            <tr v-if="!codeClasses || (Array.isArray(codeClasses) && codeClasses.length === 0)">
                <td colspan="3">
                    List is empty.
                </td>
            </tr>

            <tr v-else v-for="codeClass in codeClasses" :key="codeClass.groupCode">
                <td align="center">
                    {{ codeClass.groupCode }}
                </td>
                <td align="left">
                    <router-link :to="{ name: 'CodeClassReadPage', params: {groupCode: codeClass.groupCode } }">
                        {{ codeClass.groupName }}
                    </router-link>
                </td>
                <td align="center">
                    {{ codeClass.regDate }}
                </td> 
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CodeClassList',
    props: {
        codeClasses: {
            type: Array
        }
    }
}
</script>