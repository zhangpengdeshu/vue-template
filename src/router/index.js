import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { getToken, setToken } from '../lib/utils'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 阻止页面跳转
router.beforeEach((to, from , next) => {
	const token = getToken()
	if (token) {
		if (!store.state.router.hasGetRules) {
			store.dispatch('authorization').then(rules => {
				store.dispatch('concatRoutes', rules).then(routers => {
					router.addRoutes(routers)
					next({ ...to, replace: true })
				}).catch(() => {
					next({ name: 'login' })
				})
			}).catch(() => {
				setToken('')
				next({ name: 'login' })
			})
		} else {
			next()
		}
	} else {
		if (to.name === 'login') {
			next()
		} else {
			next({name: 'login'})
		}
	}
})



export default router

/**
 *  路由详解(基础)：
 *  router-link和router-view组件
 *  路由配置:
 *      动态路由
 *      嵌套路由  // 嵌套路由必须配合router-view使用
 *      命名路由
 *      命名视图
 *  js 操作路由
 *  重定向和别名
 *
  * 路由详解(进阶):
  * 路由组件传参
  * HTML5 history 模式
  * 导航守卫
  * 路由元信息
  * 过渡效果
  *  */
