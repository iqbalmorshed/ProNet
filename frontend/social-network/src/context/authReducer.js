import * as actionTypes from './authActionTypes'

const initialAuthState = {
    isLoggedIn: false,
    username: '',
    error: '',
    loading: false,
}

const authReducer = (state, action) => {
    console.log("action:", action)
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                isLoggedIn: false,
                username: '',
                error: '',
                loading: true,
            }
        case actionTypes.LOGIN:
            return {
                isLoggedIn: true,
                username: action.payload.username,
                error: '',
                loading: false,
            }
        case actionTypes.LOGIN_ERROR:
            return {
                isLoggedIn: false,
                username: '',
                error: action.payload.error,
                loading: false,
            }
        case actionTypes.LOGOUT:
            return {
                isLoggedIn: false,
                username: '',
                error: '',
                loading: false
            }
        default:
            return state;
    }
}

export { initialAuthState, authReducer }