<template>
    <div>
        <table>
            <tr>
                <td>자료번호</td>
                <td>
                    <input type="text" :value="pdsItem.itemId" readonly>
                </td>
            </tr>
            <tr>
                <td>자료명</td>
                <td>
                    <input type="text" :value="pdsItem.itemName" readonly>
                </td>
            </tr>
            <tr>
                <td>파일</td>
                <td>
                    <div v-for="(attachment, index) in attachments" :key="index">
                        <a :href="downloadUrl(attachment)">
                            {{ getOriginalName(attachment) }}
                        </a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>자료설명</td>
                <td>
                    <textarea :value="pdsItem.description" readonly></textarea>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PdsRead',
    props: {
        pdsItem: {
            type: Object,
            required: true
        },
        attachments: {
            type: Array
        }
    },
    methods: {
        downloadUrl(fileName){
            return 'http://localhost:8080/pds/download?fullName='+fileName
        },
        getOriginalName(fileName){
            const idx = fileName.indexOf('_')+1

            return fileName.substr(idx)
        }
    }
}
</script>