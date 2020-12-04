<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">번호</th>
                <th align="center" width="320">제목</th>
                <th align="center" width="180">등록일시</th>
            </tr>
            <tr v-if="!notices || (Array.isArray(notices) && notices.length === 0)">
               <td colspan="3">List is empty.</td> 
            </tr>
            <tr v-else v-for="notice in notices" :key="notice.noticeNo">
                <td align="center">{{ notice.noticeNo }}</td>
                <td align="left">
                    <router-link :to="{ name : 'NoticeReadPage', params: { noticeNo: notice.noticeNo.toString() }}">
                        {{ notice.title }}
                    </router-link>
                </td>
                <td align="center">{{notice.regDate}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'NoticeList',
    props: {
        notices: {
            type: Array
        }
    }
}
</script>