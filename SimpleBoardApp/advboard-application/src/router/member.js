import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import AdminSetupPage from '@/views/member/AdminSetupPage'
import MemberRegisterPage from '@/views/member/MemberRegisterPage'

export const MemberRouters = [
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
            if(!isAdmin){
                alert('관리자 권한이 필요합니다.')
                next({ name: 'Signin' })
            }
            next()
        }
    }, 
]