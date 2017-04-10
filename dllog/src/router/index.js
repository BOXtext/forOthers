import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
  	path: '/Details',
  	name: 'Details',
  	component: require('../components/Details.vue')
    },{
    path: '/',
	 name: 'First',
	 component: require('../components/First.vue')
    },{
    path: '/succ',
    name: 'succ',
    component: require('../components/succ.vue')
    },{
    path: '/Home',
    name: 'Home',
    component: require('../components/Home.vue')
    }
  ]
})
