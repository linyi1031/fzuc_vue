import request from '@/utils/request'
import config from '@/config'

const api = {
    GetArticles: '/listAll',
    FindArticleByArticleId:'/articles/findArticle/{articleId}',
    FindDetailsByArticleId:'/articles/findArticleDetails/{articleId}',
    PublishArticle:'/articles/publish',
    SearchByKeywords:'/articles/search',
}

export function getArticles (param) {
    return request({
        requestConfig: config.requestConfig.articles,
        url: api.GetArticles,
        method: 'post' ,
        data: param
    })
}
export function findArticleByArticleId (param) {
    return request({
        requestConfig: config.requestConfig.articles,
        url: api.FindArticleByArticleId,
        method: 'get' ,
        data: param
    })
}
export function findDetailsByArticleId (param) {
    return request({
        requestConfig: config.requestConfig.articles,
        url: api.FindDetailsByArticleId,
        method: 'get' ,
        data: param
    })
}
export function publishArticle (param) {
    return request({
        requestConfig: config.requestConfig.articles,
        url: api.PublishArticle,
        method: 'post' ,
        data: param
    })
}
export function searchByKeywords (param) {
    return request({
        requestConfig: config.requestConfig.articles,
        url: api.SearchByKeywords,
        method: 'get' ,
        data: param
    })
}
