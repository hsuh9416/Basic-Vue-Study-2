<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>자료명</td>
                <td>
                    <input type="text" v-model="itemName">
                </td>
            </tr>
            <tr>
                <td>파일</td>
                <td>
                    <input type="file" @change="handleFileChange($event)"/>
                    <div>
                        <div v-for="(attachment, index) in attachments" :key="index">
                            {{getOriginalName(attachment)}}
                            <span @click="removeAttach(index)">X</span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>자료설명</td>
                <td>
                    <textarea v-model="description" rows="5"></textarea>
                </td>
            </tr>
        </table>

        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name: 'PdsListPage'}">목록</router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: 'PdsRegisterForm',
    props: {
        attachments: {
            type: Array
        }
    },
    data(){
        return {
            itemName: '',
            description: '',
            file: ''
        }
    },
    methods: {
        onSubmit(){
            const { itemName, description } = this
            this.$emit('submit', { itemName, description })
        },
        handleFileChange(evt){
            this.file = evt.target.file[0]
            const { file } = this
            this.$emit('attach', { file })
        },
        getOriginalName(fileName){
            const idx = fileName.indexOf("_") + 1

            return fileName.substr(idx)
        },
        removeAttach(index){
            this.$emit('removeAttach', index)
        }
    }
}
</script>