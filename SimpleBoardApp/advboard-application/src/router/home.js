import Home from '@/views/Home'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'

export const HomeRouters = [
    {
    path : '/',
    name : 'Home',
    components : {
        header : MainHeader,
        menu : MenuBar,
        default : Home,
        footer : Footer
        } 
    }
]