<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>상품번호</td>
                <td>
                    <input :value="item.itemId" type="text" disabled>
                </td>
            </tr>
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
                    <input type="file" @change="handleFileChange($event)"/>
                </td>
            </tr>
            <tr>
                <td>미리보기파일</td>
                <td>
                    <input type="file" @change="handlePreviewFileChange($event)"/>
                </td>
            </tr>
            <tr>
                <td>상품설명</td>
                <td>
                    <textarea v-model="description" rows="5"></textarea>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name: 'ItemReadPage', params: { itemId: item.itemId.toString() }}">
                취소
            </router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ItemModifyForm',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            itemName: '',
            price: 0,
            description: '',
            file: '',
            previewFile: ''
        }
    },
    methods: {
        onSubmit(){
            const { itemName, price, description, file, previewFile } = this
            this.$emit('submit', { itemName, price, description, file, previewFile })
        },
        handleFileChange(evt){
            this.file = evt.target.files[0]
        },
        handlePreviewFileChange(evt){
            this.previewFile = evt.target.files[0]
        }
    },
    created(){
        this.itemName = this.item.itemName
        this.price = this.item.price
        this.description = this.item.description
    }
}
</script>