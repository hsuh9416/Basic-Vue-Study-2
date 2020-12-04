import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CoinChargeListPage from '@/pages/coin/CoinChargeListPage'
import CoinChargeRegisterPage from '@/pages/coin/CoinChargeRegisterPage'
import CoinPayListPage from '@/pages/coin/CoinPayListPage'

export const CoinRouters = [
    {
        path: '/coin',
        name: 'CoinChargeListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CoinChargeListPage,
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
        path: '/coin/register',
        name: 'CoinChargeRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CoinChargeRegisterPage,
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
        path: '/coin/pay',
        name: 'CoinPayListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CoinPayListPage,
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
    }
]