// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue 모듈 불러오기
import Vue from 'vue'
// App 모듈 불러오기
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
//Vue 인스턴스 생성
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
