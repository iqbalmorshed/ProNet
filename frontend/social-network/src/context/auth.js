import axios from 'axios'
import * as actionTypes from './authActionTypes'
import { loginUrl, logoutUrl, /*registrationUrl*/ } from '../data/apiInfo'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            username: username,
        }
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error: error,
        }
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const attemptLogin = (username, password, authDispatch) => {
    //console.log("login URL:", loginUrl)
    authDispatch(authStart())
    axios.post(
        loginUrl,
        {
            username: username,
            password: password,
        }
    )
        .then(
            res => {
                const token = res.data.key
                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                authDispatch(authSuccess(token, username))
            }
        )
        .catch(
            err => {
                console.log("error:", err)
                authDispatch(authFail(err))
            }
        )

}

export const attemptLogout = (authDispatch) => {

    axios.post(
        logoutUrl
    )
    .then(
        res => {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            authDispatch(authLogout())
        }
    )
    .catch(
        err => {
            console.log("Could not log out properly")
            //authDispatch(authFail(err))
        }
    )
    // localStorage.removeItem('token')
    // localStorage.removeItem('username')
    // authDispatch(authLogout())
}

export const checkAuthStatus = (authDispatch) => {
    const token = localStorage.getItem('token')
    if (token===undefined){
        attemptLogout(authDispatch)
    }else{
        const username = localStorage.getItem('username')
        authDispatch(authSuccess(token, username))
    }
}