import Vue from 'vue'
import Router from 'vue-router'
import ItemListPage from '@/views/ItemListPage'
import ItemRegisterPage from '@/views/ItemRegisterPage'
import ItemReadPage from '@/views/ItemReadPage'
import ItemModifyPage from '@/views/ItemModifyPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ItemListPage',
      components: {
        default: ItemListPage
      }
    },
    {
      path: '/item/register',
      name: 'ItemRegisterPage',
      components: {
        default: ItemRegisterPage
      }
    },
    {
      path: '/item/:itemId',
      name: 'ItemReadPage',
      components: {
        default: ItemReadPage
      },
      props: {
        default: true
      }
    },    
    {
      path: '/item/:itemId/modify',
      name: 'ItemModifyPage',
      components: {
        default: ItemModifyPage
      },
      props: {
        default: true
      }
    }
  ]
})
