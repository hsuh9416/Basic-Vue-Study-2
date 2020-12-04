import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import AdminSetupPage from '@/pages/member/AdminSetupPage'
import MemberRegisterPage from '@/pages/member/MemberRegisterPage'
import MemberListPage from '@/pages/member/MemberListPage'
import MemberModifyPage from '@/pages/member/MemberModifyPage'
import MemberReadPage from '@/pages/member/MemberReadPage'

export const MemberRouters = [
    {
        path: '/user',
        name: 'MemberListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberListPage,
            footer: Footer
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if(!isAdmin){
                alert('관리자 권한이 필요합니다.')
                next({ name: 'Signin' })
            }
            next()
        }
    }, 
    {
        path: '/user/setup',
        name: 'AdminSetupPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: AdminSetupPage,
            footer: Footer
        }
    },
    {
        path: '/user/register',
        name: 'MemberRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberRegisterPage,
            footer: Footer
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if(!isAdmin){
                alert('관리자 권한이 필요합니다.')
                next({ name: 'Signin' })
            }
            next()
        }
    },
    {
        path: '/user/:userNo',
        name: 'MemberReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberReadPage,
            footer: Footer
        },
        props:{
            default: true
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if(!isAdmin){
                alert('관리자 권한이 필요합니다.')
                next({ name: 'Signin' })
            }
            next()
        }
    },
    {
        path: '/user/:userNo/modify',
        name: 'MemberModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberModifyPage,
            footer: Footer
        },
        props:{
            default: true
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if(!isAdmin){
                alert('관리자 권한이 필요합니다.')
                next({ name: 'Signin' })
            }
            next()
        }
    }
]