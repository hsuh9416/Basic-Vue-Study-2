import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeDetailListPage from '@/views/codedetail/CodeDetailListPage'
import CodeDetailRegisterPage from '@/views/codedetail/CodeDetailRegisterPage'
import CodeDetailModifyPage from '@/views/codedetail/CodeDetailModifyPage'
import CodeDetailReadPage from '@/pages/codedetail/CodeDetailReadPage'

export const CodeClassRouters = [

    // 목록 화면
    {
        path: '/codedetail',
        name: 'CodeDetailListPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailListPage,
            footer: Footer
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    // 등록 화면
    {
        path: '/codedetail/register',
        name: 'CodeDetailRegisterPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeDetailRegisterPage,
            footer: Footer
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    // 상세 보기 화면
    {
        path: '/codedetail/:groupCode/:codeValue',
        name: 'CodeDetailReadPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeDetailReadPage,
            footer: Footer
        },
        props: {
            default: true
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }       
    },
    // 수정 화면
    {
        path: '/codedetail/:groupCode/:codeValue/modify',
        name: 'CodeDetailModifyPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeDetailModifyPage,
            footer: Footer
        },
        props: {
            default: true
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }  
    }
]