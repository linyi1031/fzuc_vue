import fa from 'element-ui/src/locale/lang/fa'

export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: 'FZU_Community',
    /**
     * @description api请求基础路径
     */
    requestConfig: {
        /**
         * @description 文章请求
         */
        articles: {
            dev: 'http://localhost:8080/articles/',
            prod: 'http://localhost:8080/articles/',
            isEncrypt: false,
            appId: 'poFYleKURAY7Z1t6npoluob7KQnFcmy2',
            secret: 'izUxyta7f7jHqmS9'
        },

    },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home'
}
