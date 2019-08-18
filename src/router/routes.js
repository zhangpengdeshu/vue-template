import Home from '../views/Home.vue'
export const routesMap = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if (from.name === 'login') {
      //   alert('from login')
      // }
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import(/* webpackChunkName: "argu" */ '../views/Argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import(/* webpackChunkName: "parent" */ '../views/Parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('../views/Child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store.vue')
  },
  {
    path: '/main',
    // redirect: {
    //   name: 'home'
    // }
    redirect: to => '/'
  }
]




export const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	{
		path: '*',
		component: () => import('../views/error_404.vue')
	}
]
