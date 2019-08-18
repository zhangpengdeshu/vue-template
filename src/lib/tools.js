import { baseURL } from '@/config'
import axios from 'axios'
class HttpRequest {
    constructor(baseUrl = baseURL ) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {}
        }
        return config
    }

    interceptor (instance) {
        instance.interceptors.request.use(config => {
            // 添加全局的loading
            return config
        }, error => {
            Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            console.log(res)
            return res
        }, error => {
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptor(instance)
        return instance(options)
    }
    response () {}

}

export default HttpRequest