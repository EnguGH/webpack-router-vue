import Vue from 'vue'
// vue-router
import VueRouter from 'vue-router'

import App from 'App/App.vue'
import Landing from 'views/Landing/Landing.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: App,
  redirect: { name: 'landing', params: {} },
  children: [{
    name: 'landing',
    path: 'landing',
    component: Landing,
    props: true
  }]
}];

const router = new VueRouter({
  mode: 'history',
  routes
});

var app = new Vue({
  router
}).$mount('#app')
