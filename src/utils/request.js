import axios from 'axios'
import { Message } from 'element-ui'
import { VueAxios } from './axios'
import fa from 'element-ui/src/locale/lang/fa'

let isEncrypt = false
let appId = null
let secret = null
// 创建 axios 实例
const request = axios.create({
    timeout: 300000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
    return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
    if (config.requestConfig) {
        config.baseURL = process.env.NODE_ENV === 'development'
            ? config.requestConfig.dev
            : config.requestConfig.prod
        //加密
        if (config.requestConfig.isEncrypt) {
            config.headers = {
                'Content-Type': 'application/json'
            }
            isEncrypt = true
            appId = config.requestConfig.appId
            secret = config.requestConfig.secret
            let secretData = crypt.encrypt(appId, secret, config.data)
            config.data = {
                secretData: secretData
            }
        } else {
            isEncrypt = false
        }
    }
    return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
    if (response.data.head.respCode === -1
        || response.data.head.respCode === -2) {
        Message.error(response.data.head.respMsg)
        return Promise.reject(response.data.head.respMsg)
    } else {
        if (response.data.body == null) {
            return ''
        } else if (isEncrypt) {
            try {
                return crypt.decrypt(appId, secret, response.data.body)
            } catch (e) {
                return Promise.reject(e)
            }
        } else {
            return response.data.body
        }
    }
}, errorHandler)

const installer = {
    vm: {},
    install (Vue) {
        Vue.use(VueAxios, request)
    }
}

export default request

export {
    installer as VueAxios,
    request as axios
}
