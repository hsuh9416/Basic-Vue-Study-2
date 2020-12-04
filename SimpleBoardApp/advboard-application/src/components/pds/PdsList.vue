<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">자료번호</th>
                <th align="center" width="320">자료명</th>
                <th align="center" width="100">조회수</th>
            </tr>

            <tr v-if="!pdsItems || (Array.isArray(pdsItems) && pdsItems.length === 0)">
                <td colspan="3">List is empty.</td>
            </tr>

            <tr v-else v-for="item in pdsItems" :key="item.itemId">
                <td align="center">{{ item.itemId }}</td>
                <td align="left">
                    <router-link :to="{ name: 'PdsreadPage', params: { itemId: item.itemId.toString() } }">
                        {{ item.itemName }}
                    </router-link>
                </td>
                <td align="right">{{ item.viewCnt }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PdsList',
    props: {
        pdsItems: {
            type: Array
        }
    }
}
</script>