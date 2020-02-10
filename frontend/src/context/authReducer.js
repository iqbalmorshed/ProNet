import * as actionTypes from './authActionTypes'

const initialAuthState = {
    token: null,
    username: '',
    error: null,
    loading: null,
}

const authReducer = (state, action) => {
    //console.log("action:", action)
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                token: null,
                username: '',
                error: null,
                loading: true,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                token: action.payload.token,
                username: action.payload.username,
                error: null,
                loading: false,
            }
        case actionTypes.AUTH_FAIL:
            return {
                token: null,
                username: '',
                error: action.payload.error,
                loading: false,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                token: null,
                username: '',
                error: null,
                loading: false
            }
        default:
            return state;
    }
}

export { initialAuthState, authReducer }