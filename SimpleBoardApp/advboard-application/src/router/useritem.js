import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import UserItemListPage from '@/pages/useritem/UserItemListPage'
import UserItemReadPage from '@/pages/useritem/UserItemReadPage'

export const UserItemRouters = [
    {
        path: '/useritem',
        name: 'UserItemListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: UserItemListPage,
            footer: Footer
        },
        beforeEnter(to, from, next){
            const { isAuthorized } = store.getters
            if(!isAuthorized){
                alert('로그인이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    {
        path: '/useritem/:userItemNo',
        name: 'UserItemReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: UserItemReadPage,
            footer: Footer
        },
        props:{
            default: true
        },
        beforeEnter(to, from, next){
            const { isAuthorized } = store.getters
            if(!isAuthorized){
                alert('로그인이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    }
]