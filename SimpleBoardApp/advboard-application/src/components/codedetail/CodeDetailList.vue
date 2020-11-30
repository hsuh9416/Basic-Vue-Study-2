<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="160">그룹코드</th>
                <th align="center" width="160">코드값</th>
                <th align="center" width="160">코드명</th>
                <th align="center" width="160">정렬순서</th>
                <th align="center" width="160">등록일시</th>
            </tr>
            <tr v-if="!codeDetails || (Array.isArray(codeDetails) && codeDetails.lengh === 0)">
                <td colspan="5">
                    List is empty.
                </td>
            </tr>

            <tr v-else v-for="codeDetail in codeDetails" :key="`${codeDetail.groupCode}-${codeDetail.codeValue}`">
                <td align="center">{{codeDetail.groupValue}}</td>
                <td align="center">{{codeDetail.codeValue}}</td>
                <td align="left">
                    <router-link :to="{ name: 'CodeDetailReadPage', params: { groupCode: codeDetail.groupCode, codeValue: codeDetail.codeValue }}">
                        {{ codeDetail.codeName }}
                    </router-link>
                </td>
                <td align="center">{{ codeDetail.sortSeq }}</td>
                <td align="center">{{ codeDetail.regDate }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CodeDeteilList',
    props: {
        codeDetails: {
            type: Array
        }
    }
}
</script>