//import { getUrl } from '../data/apiInfo'
import axios from 'axios';
import { operationToApi } from '../data/apiInfo'
import { StringFormatter } from '../utils/StringFormatter'
import { operations } from '../data/apiOperations';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.headers.post['Content-Type'] = "application/json";

const callApi = async (apiUrl, method, token, data = {}) => {
    return await axios({
        url: apiUrl,
        method: method,
        headers: {
            Authorization: `Token ${token}`,
        },
        data: data,
    });
}

function getUrl(operationType, urlVariables = []) {

    if (urlVariables.length)
        return StringFormatter(operationToApi[operationType].url, urlVariables[0])
    else
        return StringFormatter(operationToApi[operationType].url)
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

    const dataMethod = { get: 'get', post: 'post' }
    const operationMethod = operationToApi[operationType].method
    
    if (operationType in operations) {
        if (operationMethod in dataMethod)
            return callApi(getUrl(operationType, data.urlVariables), operationMethod, token, data.payload)
        return callApi(getUrl(operationType, data.urlVariables), operationMethod, token)
    }
    else {
        throw new Error("Error in processOperaiotn: operationType not found")
    }
}
