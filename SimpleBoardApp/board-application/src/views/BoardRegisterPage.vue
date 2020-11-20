<template>
    <div align="center">
        <h2>게시판 등록</h2>
        <board-register-form/>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardRegisterForm from '@/components/BoardRegisterForm' // '@'는 default로 등록되어 있는 src 폴더의 별칭

    export default {
    // 컴포넌트 이름
        name : 'BoardRegisterPage',
    // 지역 컴포넌트 등록
        components : { BoardRegisterForm }
    }
</script>