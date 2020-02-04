import { operations } from './apiOperations'


const hostUrl = 'http://127.0.0.1:8000/'
const apiPath = 'api/v1/'
const loginPath = 'rest-auth/login/'
const logoutPath = 'rest-auth/logout/'
const registrationPath = 'rest-auth/registration/'
const postPath = 'posts/'
const commentPath = 'comments/'
const summaryStatPath = 'summary-stats/'

export const postPerPage = 4
export const apiUrl = hostUrl + apiPath
export const loginUrl = apiUrl + loginPath
export const logoutUrl = apiUrl + logoutPath
export const registrationUrl = apiUrl + registrationPath

const postUrl = apiUrl + postPath
const commentUrl = apiUrl + commentPath
const summaryStatUrl = apiUrl + summaryStatPath

export const operationToApi = {
    [operations.POST_LIST]: { url: postUrl + '?page={0}', method: 'get' },
    [operations.POST_CREATE]: { url: postUrl + "create/", method: 'post' },
    [operations.POST_UPDATE]: { url: postUrl + "{0}/modify/", method: 'put' },
    [operations.POST_DELETE]: { url: postUrl + "{0}/modify/", method: 'delete' },

    [operations.COMMENT_CREATE]: { url: commentUrl + "{0}/create/", method: 'post' },
    [operations.COMMENT_UPDATE]: { url: commentUrl + "detail/{0}/modify/", method: 'put' },
    [operations.COMMENT_DELETE]: { url: commentUrl + "detail/{0}/modify/", methd: 'delete' },

    [operations.SHOW_SUMMARY_STATS]: { url: summaryStatUrl, method: 'get' },
    
    [operations.PERFORM_REGISTRATION]: {url: registrationUrl, method: 'post'},
}


