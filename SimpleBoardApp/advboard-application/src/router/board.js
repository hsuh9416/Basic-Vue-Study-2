import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import BoardRegisterPage from '@/views/board/BoardRegisterPage'
import BoardListPage from '@/views/board/BoardListPage'
import BoardModifyPage from '@/views/board/BoardModifyPage'
import BoardReadPage from '@/views/board/BoardReadPage'

export const BoardRouters = [
    {
        path: '/board',
        name: 'BoardListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardListPage,
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
        path: '/board/register',
        name: 'BoardRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardRegisterPage,
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
        path: '/board/:boardNo',
        name: 'BoardReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardReadPage,
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
        path: '/board/:boardNo/modify',
        name: 'BoardModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardModifyPage,
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