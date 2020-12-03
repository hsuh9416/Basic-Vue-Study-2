<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>상품명</td>
                <td>
                    <input type="text" v-model="itemName">
                </td>
            </tr>
            <tr>
                <td>상품가격</td>
                <td>
                    <input type="text" v-model="price">&nbsp;원
                </td>
            </tr>
            <tr>
                <td>상품파일</td>
                <td>
                    <input type="text" @change="handleFileChange($event)">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>미리보기파일</td>
                <td>
                    <input type="file" @change="handlePreviewFileChange($event)">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>상품설명</td>
                <td>
                    <textarea v-model="description" rows="5"></textarea>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name: 'ItemListPage' }">목록</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ItemRegisterForm',
    data(){
        return {
            itemName: '',
            price: '',
            description: '',
            file: '',
            previewFile: ''
        }
    },
    methods: {
        onSubmit(){
            const {itemName, price, description, file, previewFile } = this
            this.$emit('submit',{ itemName, price, description, file, previewFile })
        },
        handleFileChange(evt){
            this.file = evt.target.files[0]
        },
        handlePreviewFileChange(evt){
            this.previewFile = evt.target.files[0]
        }
    }
}
</script>