<template>
    <!-- <div>
        <h3>게시판 등록 폼</h3>
        <button type="submit">등록</button>
        <router-link :to="{ name : 'BoardListPage'}">취소</router-link>
    </div> -->
    <!-- 게시글 등록 폼 화면 구성 -->
    <!-- 
        @submit.prevent 기능
         :   기본적으로 submit 버튼으로 바로 submit 되지만 조건식 등을 적용하기 위해 submit을 유보할 수 있다.
            이에 따라 prevent 기능을 걸어 submit으로 인한 제출을 보류하고 onSubmit함수를 발생시켜 조건식 등을
            처리하고 조건이 완료된 경우 제출하는 사용자 정의식 submit 함수를 구성한다.
     -->
    <form @submit.prevent="onSubmit"> 
        <table>
            <tr>
                <td>제목</td>
                <td><input type="text" v-model="title"></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" v-model="writer"></td>
            </tr>
            <tr>
                <td>내용</td>
                <td><textarea v-model="content" rows="5"></textarea></td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link :to="{ name : 'BoardListPage' }">취소</router-link>
        </div>
    </form>

</template>

<script>
    export default {
        // 컴포넌트 이름
        name : 'BoardRegisterForm',
        // data 속성 정의
        data() {
            return {
                title : '',
                content : '',
                writer : ''
            }
        },
        methods : {
            // 입력한 데이터와 함께 'submit 이벤트를 발생시킨다.
            onSubmit() {
                // 여기서 'this'는 함수가 호출된 대상인 form을 가르키되, 구체적으로는 v-model로 엮어온 데이터 속성의 집합체를 말한다.
                const { title, content, writer } = this
                this.$emit('submit', { title, content, writer })
            }
        }
    }
</script>