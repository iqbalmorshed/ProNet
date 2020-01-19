import { getUrl } from '../data/apiInfo'
import axios from 'axios';
import { postOperations, commentOperations, statOperations } from '../data/apiOperations'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.headers.post['Content-Type'] = "application/json";

const callApi = async (apiUrl, method, token, data = {}) => {
    console.log("apiUrl:", apiUrl)
    return await axios({
        url: apiUrl,
        method: method,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: data,
    });
}

export const processPostCommentOperation = async (token, operationType, data) => {

    if (!data.hasOwnProperty('urlVariables'))
        data.urlVariables = []

    if (operationType === postOperations.POST_CREATE || operationType === commentOperations.COMMENT_CREATE) {
        callApi(getUrl(operationType, data.urlVariables), 'post', token, data.payload)
    }
    else if (operationType === postOperations.POST_UPDATE || operationType === commentOperations.COMMENT_UPDATE) {
        callApi(getUrl(operationType, data.urlVariables), 'put', token, data.payload)
    }
    else if (operationType === postOperations.POST_DELETE || operationType === commentOperations.COMMENT_DELETE) {
        callApi(getUrl(operationType, data.urlVariables), 'delete', token)
    }
    else {
        console.log("Error: From /apiCommunction/apiCallFunction.js callPostCommentApi: callType not matched with any valid type ")
    }
}

export const processStatOperation = async (token, operationType, data) => {

    if(operationType===statOperations.SHOW_SUMMARY_STATS)
        callApi(getUrl(operationType, data.urlVariables), 'get', token)
}
/**
 * 
 * @param {string} token 
 * @param {string} operationType 
 * @param {object} data
 * @param {array} data.urlVariables - contains an array of url variables used in the url path of the particular operation
 * @param {object} data.payload - actual data that will be sent by the operation.
 */
export const processOperation = async (token, operationType, data) => {
    console.log("operationtype", operationType)
    if (operationType in postOperations || operationType in commentOperations)
        processPostCommentOperation(token, operationType, data)
    else if(operationType in statOperations)
        processStatOperation(token, operationType, data)
    else {
        console.log("Error in processOperaiotn: operationType not found")
    }
}
