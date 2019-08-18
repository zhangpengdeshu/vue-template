import { routes, routesMap } from '@/router/routes'

const state = {
	routers: routes,
	hasGetRules: false
}

const mutations = {
	'CONCAT_ROUTES' (state, routerList) {
		state.routers = routerList.concat(routes)
		state.hasGetRules = true
	}
}

const getAccesRouterList = (routes, rules) => {
	return routes.filter(item => {
		if (rules[item.name]) {
			if (item.children) item.children = getAccesRouterList(item.children, rules)
			return true
		} else return false
	})
}

const actions = {
	concatRoutes ({ commit }, rules) {
		return new Promise((resolve, reject) => {
			try {
				let routerList = []
				if (Object.entries(rules).every(item => item[1])) {
					routerList = routesMap
				} else {
					routerList = getAccesRouterList(routesMap, rules)
				}
				commit('CONCAT_ROUTES', routerList)
				resolve(state.routers)
			}catch (e) {
				reject(e)
			}
		})
	}
}

export default {
	state,
	mutations,
	actions
}
