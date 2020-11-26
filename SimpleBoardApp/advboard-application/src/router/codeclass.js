import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeClassListPage from '@/views/codeclass/CodeClassListPage'
import CodeClassRegisterPage from '@/views/codeclass/CodeClassRegisterPage'
import CodeClassModifyPage from '@/views/codeclass/CodeClassModifyPage'
import CodeClassReadPage from '@/pages/codeclass/CodeClassReadPage'

export const CodeClassRouters = [

    // 목록 화면
    {
        path: '/codeclass',
        name: 'CodeClassListPage',
        components:{

        }
    },
    // 등록 화면
    {
        path: '/codeclass/register',
        name: 'CodeClassListPage',
        components:{
            
        }
    },
    // 상세 보기 화면
    {
        path: '/codeclass/:groupCode',
        name: 'CodeClassListPage',
        components:{
            
        }
    },
    // 수정 화면
    {
        path: '/codeclass/:groupCode/modify',
        name: 'CodeClassListPage',
        components:{
            
        }
    }
]