import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import PdsRegisterPage from '@/views/pds/PdsRegisterPage'
import PdsListPage from '@/views/pds/PdsListPage'
import PdsModifyPage from '@/views/pds/PdsModifyPage'
import PdsReadPage from '@/views/pds/PdsReadPage'

export const PdsRouters = [
    {
        path: '/pds',
        name: 'PdsListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: PdsListPage,
            footer: Footer
        }
    }, 
    {
        path: '/pds/register',
        name: 'PdsRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: PdsRegisterPage,
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
        path: '/pds/:itemId',
        name: 'PdsReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: PdsReadPage,
            footer: Footer
        },
        props:{
            default: true
        }
    },
    {
        path: '/pds/:itemId/modify',
        name: 'PdsModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: PdsModifyPage,
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