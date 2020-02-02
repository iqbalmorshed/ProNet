import { postOperations, commentOperations, statOperations } from './apiOperations'
import { StringFormatter } from '../utils/StringFormatter'

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

const operationToUrlMap = {
    [postOperations.POST_LIST]: postUrl + '?page={0}',
    [postOperations.POST_CREATE]: postUrl + "create/",
    [postOperations.POST_UPDATE]: postUrl + "{0}/modify/",
    [postOperations.POST_DELETE]: postUrl + "{0}/modify/",

    [commentOperations.COMMENT_CREATE]: commentUrl + "{0}/create/",
    [commentOperations.COMMENT_UPDATE]: commentUrl + "detail/{0}/modify/",
    [commentOperations.COMMENT_DELETE]: commentUrl + "detail/{0}/modify/",
    [statOperations.SHOW_SUMMARY_STATS]: summaryStatUrl,
}

export function getUrl(operationType, urlVariables = []) {

    if (urlVariables.length)
        return StringFormatter(operationToUrlMap[operationType], urlVariables[0])
    else
        return StringFormatter(operationToUrlMap[operationType])
}

