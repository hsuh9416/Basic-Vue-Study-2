import Vue from 'vue'
import Router from 'vue-router'
import { HomeRouters } from '@/router/home'
import { AuthRouters } from '@/router/auth'
import { MemberRouters } from '@/router/member'
import { CodeClassRouters } from '@/router/codeclass'
import { CodeDetailRouters} from '@/router/codedetail'
import { BoardRouters } from '@/router/board'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...HomeRouters,
    ...AuthRouters,
    ...MemberRouters,
    ...CodeClassRouters,
    ...CodeDetailRouters,
    ...BoardRouters
  ]
})
