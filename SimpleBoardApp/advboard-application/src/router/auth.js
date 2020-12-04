import HomeHeader from '@/components/common/HomeHeader'
import Footer from '@/components/common/Footer'
import Signin from '@/pages/auth/Signin'
import Signup from '@/pages/auth/Signup'

export const AuthRouters = [
    {
        path: '/auth/signin',
        name: 'Signin',
        components: {
            header: HomeHeader,
            default: Signin,
            footer: Footer
        }
    },
    {
        path: '/auth/signup',
        name: 'Signup',
        components: {
            header: HomeHeader,
            default: Signup,
            footer: Footer
        }
    }
]