<template>
    <div>
        <!-- <h3>게시판 상세보기 뷰</h3> -->
        <!-- 상세보기 화면 구성 -->
        <table>
            <tr>
                <td>번호</td>
                <td><input type="text" :value="board.boardNo" readonly></td>
            </tr>
            <tr>
                <td>등록일시</td>
                <td><input type="text" :value="board.regDate" readonly></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" :value="board.title" readonly></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" :value="board.writer" readonly></td>
            </tr>
            <tr>
                <td>내용</td>
                <td><textarea :value="board.content" readonly></textarea></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        // 컴포넌트 이름
        name : 'BoardRead',
        props : {
            board : {
                type : Object,
                required : true
            }
        }
    }
</script>