import Vue from 'vue'
import Router from 'vue-router'
import { HomeRouters } from '@/router/home'
import { AuthRouters } from '@/router/auth'
import { MemberRouters } from '@/router/member'
import { CodeClassRouters } from '@/router/codeclass'
import { CodeDetailRouters} from '@/router/codedetail'
import { BoardRouters } from '@/router/board'
import { NoticeRouters } from '@/router/notice'
import { ItemRouters } from '@/router/item'
import { CoinRouters } from '@/router/coin'
import { UserItemRouters } from '@/router/useritem'
import { PdsRouters } from '@/router/pds'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...HomeRouters,
    ...AuthRouters,
    ...MemberRouters,
    ...CodeClassRouters,
    ...CodeDetailRouters,
    ...BoardRouters,
    ...NoticeRouters,
    ...ItemRouters,
    ...CoinRouters,
    ...UserItemRouters,
    ...PdsRouters
  ]
})
