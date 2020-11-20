<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>상품번호</td>
                <td><input :value="item.itemId" type="text" disabled></td>
            </tr>
            <tr>
                <td>상품명</td>
                <td><input type="text" v-model="itemName"></td>
            </tr>
            <tr>
                <td>상품가격</td>
                <td><input type="text" v-model="price">&nbsp;원</td>
            </tr>
            <tr>
                <td>상품파일</td>
                <td><input type="file" @change="handleFileChange($event)"></td>
                <td></td>
            </tr>
            <tr>
                <td>미리보기</td>
                <td><img v-bind:src="pictureUrl()" width="200"></td>
                <td></td>
            </tr>
            <tr>
                <td>상품설명</td>
                <td><textarea v-model="description" row="5"></textarea></td>
            </tr>
        </table>
        <div>
            <button type="submit">수정</button>
            <router-link :to="{ name: 'ItemListPage', params: { itemId: item.itemId.toString() } }">취소</router-link>
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
            file: ''
        }
    },
    methods: {
        onSubmit(){
            const {itemName, price, description, file } = this
            this.$emit('submit',{ itemName, price, description, file } )
        },
        handleFileChange(evt){
            console.log(evt.target.files)
            this.file = evt.target.files[0]
        },
        pictureUrl: function(){
            return 'http://localhost:8080/items/display?itemId=' + this.item.itemId + '&timestamp=' + new Date().getTime()
        } 
    },
    created(){
        this.itemName = this.itemitemName
        this.price = this.item.price
        this.description = this.item.description
    }
}
</script>