import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import BoardRegisterPage from '@/pages/board/BoardRegisterPage'
import BoardListPage from '@/pages/board/BoardListPage'
import BoardModifyPage from '@/pages/board/BoardModifyPage'
import BoardReadPage from '@/pages/board/BoardReadPage'

export const BoardRouters = [
    {
        path: '/board',
        name: 'BoardListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardListPage,
            footer: Footer
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
            const { isAuthorized } = store.getters
            if(!isAuthorized){
                alert('로그인이 필요합니다.')
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
            const { isAuthorized } = store.getters
            if(!isAuthorized){
                alert('로그인이 필요합니다.')
                next({ name: 'Signin' })
            }
            // 인증받은 사용자 중에서도 작성자만 수정 가능하므로 그 후속 처리를 수행함.
            store.dispatch('fetchBoard', to.params.boardNo)
            .then(() => {
                const board = store.state.board
                const isAuthor = board.writer === store.state.myinfo.userId
                if(isAuthor){
                    next()
                }else{
                    alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')
                    next(false)// router 요청을 거절함
                }
            })
            .catch( err => {
                alert('오류로 인하여 게시글 수정이 불가능합니다.')
                console.log(err.response.data.message)
                next(false)
            })
        }
    }
]