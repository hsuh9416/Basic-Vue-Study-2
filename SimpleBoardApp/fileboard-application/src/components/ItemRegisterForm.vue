<template>
    <form @submit.prevent="onSubmit">
        <table>
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
                <td>상품설명</td>
                <td><textarea v-model="description" row="5"></textarea></td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name: 'ItemListPage' }">취소</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ItemRegisterForm',
    data() {
        return {
            itemName: '',
            price: '',
            description: '',
            file: ''
        }
    },
    methods: {
        onSubmit(){
            const { itemName, price, description, file } = this
            this.$emit('submit',{ itemName, price, description, file })
        },
        // 파일을 선택하면 실행하는 메소드
        handleFileChange(evt){
            console.log(evt.target.files)
            this.file = evt.target.files[0]
        }
    }
}
</script>