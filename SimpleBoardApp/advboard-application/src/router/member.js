import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import AdminSetupPage from '@/pages/member/AdminSetupPage'

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
    }
]