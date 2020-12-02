import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import NoticeRegisterPage from '@/views/notice/NoticeRegisterPage'
import NoticeListPage from '@/views/notice/NoticeListPage'
import NoticeModifyPage from '@/views/notice/NoticeModifyPage'
import NoticeReadPage from '@/views/notice/NoticeReadPage'


export const NoticeRouters = [
    {
        path: '/notice',
        name: 'NoticeListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: NoticeListPage,
            footer: Footer
        }
    }, 
    {
        path: '/notice/register',
        name: 'NoticeRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: NoticeRegisterPage,
            footer: Footer
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    {
        path: '/notice/:noticeNo',
        name: 'NoticeReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: NoticeReadPage,
            footer: Footer
        },
        props:{
            default: true
        }
    },
    {
        path: '/notice/:noticeNo/modify',
        name: 'NoticeModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: NoticeModifyPage,
            footer: Footer
        },
        props:{
            default: true
        },
        beforeEnter (to ,from, next){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    }
]