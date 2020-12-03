<template>
    <div align="center">
        <h2>구매상품 목록</h2>
        <user-item-list :userItems="userItems" @download="onDownload"/>
    </div>
</template>

<script>
import api from '@/api'
import UserItemList from '@/components/useritem/UserItemList'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UserItemListPage',
    components: { UserItemList },
    computed: {
        ...mapState(['userItems'])
    },
    mounted(){
        this.fetchUserItemList()
    },
    methods:{
        onDownload(payload){
            const { userItemNo } = payload
            api.get(`/useritems/download/${userItemNo}`,{
                responseType: 'blob'
            })
            .then(response => {
                // todo : 내용 분석
                const contentDisposition = response.request.getResponseHeader('Content-Disposition')
                const downloadFilename = contentDisposition.substring(22, contentDisposition.lenth -1)
                const decodeDownloadFilename = decodeURIComponent(escape(downloadFilename))

                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', decodedDownloadFilename)
                document.body.appendChilde(link)
                link.click()
            })
        },
        ...mapActions(['fetchUserItemList'])
    }
}
</script>