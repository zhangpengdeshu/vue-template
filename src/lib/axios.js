import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/lib/utils'

// axios 封装
/**
 * 统一url配置
 * 统一api请求
 * request请求拦截 带上token等，设置请求头
 * response响应头拦截，统一错误处理，页面重定向等
 * 基础鉴权处理
 * 报错重定向
 */

class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseUrl: this.baseUrl,
            headers: {}
        }
        return config
    }

		distroy (url) {
			delete this.queue[url]
			if (!Object.keys(this.queue).length) {
				// Spin.hide()
			}
		}

    interceptor (instance, url) {
        instance.interceptor.request.use(config => {
            // 全局loading
            if (!Object.keys(this.queue).length){
							// this.loading = true
							// Spin.show()
						}
            this.queue[url] = true
						config.headers['Authorization'] = getToken()
            return config
        }, error => {
            return Promise.reject(error)
        })

        instance.interceptor.reqponse.use(res => {
						this.distroy(url)
            const { data } = res
            return data
        }, error => {
						this.distroy(url)
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptor(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest
