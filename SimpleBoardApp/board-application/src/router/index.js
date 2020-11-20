import Vue from 'vue'
import Router from 'vue-router'

// 지역 컴포넌트 임포트
import BoardListPage from '@/views/BoardListPage'
import BoardRegisterPage from '@/views/BoardRegisterPage'
import BoardModifyPage from '@/views/BoardModifyPage'
import BoardReadPage from '@/views/BoardReadPage'

Vue.use(Router)

export default new Router({
    // 히스토리 모드 지정 : URL 상의 해시태그 제거
    mode : 'history',
    routes : [
        /*
        {
            path : '/board/:boardNo/edit', // 라우트가 가질 경로 ':{변수명}'는 동적 할당을 보장하는 변수 취급
            name : 'BoadrModifyPage', // 라우트 이름
            // component : '', // 라우트가 불러졌을 때 <router-view/>에 표시될 컴포넌트
            components : {
                default : BoardModifyPage
            }, // 라우트가 불러졌을 때 이름을 가지는 뷰에 표시될 컴포넌트(복수)
            // redirect : '/', // 리다이렉트할 라우트
            // alias : 'BOARD', // 라우트의 별칭
            // children : {},  // 중첩된 라우트들 
            prop : {
                default : true } // 경로 변수를 컴포넌트의 props 속성으로 주입할 것인지 여부     
        }
        */
        // 목록 화면 라우트 정의
        {
            path : '/',
            name : 'BoardListPage',
            components : {
                default : BoardListPage
            }
        },
        // 등록 화면 라우트 정의
        {
            path : '/board/create',
            name : 'BoardRegisterPage',
            components : {
                default : BoardRegisterPage
            }
        },
        // 상세 화면 라우트 정의
        {
            path : '/board/:boardNo',
            name : 'BoardReadPage',
            components : {
                default : BoardReadPage
            },
            props : {
                default : true
            }
        },
        // 수정 화면 라우트 정의
        {
            path : '/board/:boardNo/edit',
            name : 'BoardModifyPage',
            components : {
                default : BoardModifyPage
            },
            props : {
                default : true
            }
        }
    ]
})