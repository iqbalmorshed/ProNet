import { operations } from './apiOperations'


const hostUrl = 'http://0.0.0.0:8000/'
const apiPath = 'api/v1/'
const authPath = 'auth/'
const loginPath = 'token/login/'
const logoutPath = 'token/logout/'
const activationPath = 'users/activation/'
const registrationPath = 'users/'
const postPath = 'posts/'
const commentPath = 'comments/'
const summaryStatPath = 'summary-stats/'
const profilePath = 'profiles/'
const connectionPath = 'connections/'

export const postPerPage = 4
export const apiUrl = hostUrl + apiPath
export const loginUrl = apiUrl + authPath + loginPath
export const logoutUrl = apiUrl + authPath + logoutPath
export const registrationUrl = apiUrl + authPath + registrationPath


const profileUrl = apiUrl + profilePath
const postUrl = apiUrl + postPath
const commentUrl = apiUrl + commentPath
const summaryStatUrl = apiUrl + summaryStatPath
const connectionUrl = apiUrl + connectionPath
const activationUrl = apiUrl + authPath + activationPath

export const operationToApi = {
    [operations.POST_LIST]: { url: postUrl + '?page={0}', method: 'get' },
    [operations.POST_CREATE]: { url: postUrl + "create/", method: 'post' },
    [operations.POST_UPDATE]: { url: postUrl + "{0}/modify/", method: 'put' },
    [operations.POST_DELETE]: { url: postUrl + "{0}/modify/", method: 'delete' },
    [operations.POST_LIST_AUTHOR]: { url: postUrl + '?author={0}&page={1}', method: 'get' },

    [operations.COMMENT_CREATE]: { url: commentUrl + "{0}/create/", method: 'post' },
    [operations.COMMENT_UPDATE]: { url: commentUrl + "detail/{0}/modify/", method: 'put' },
    [operations.COMMENT_DELETE]: { url: commentUrl + "detail/{0}/modify/", methd: 'delete' },

    [operations.SHOW_SUMMARY_STATS]: { url: summaryStatUrl, method: 'get' },

    [operations.PERFORM_REGISTRATION]: { url: registrationUrl, method: 'post' },

    [operations.SHOW_PROFILE]: { url: profileUrl + "{0}/", method: 'get' },
    [operations.EDIT_PROFILE]: { url: profileUrl + "{0}/", method: 'put' },

    [operations.FOLLOW]: { url: connectionUrl + 'follow/', method: 'post' },
    [operations.UNFOLLOW]: { url: connectionUrl + 'unfollow/{0}/', method: 'delete' },

    [operations.ACCOUNT_ACTIVATE]: { url: activationUrl, method: 'post' },
}


