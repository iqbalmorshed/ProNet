import React, { useState, createContext, useReducer } from 'react'
import { authReducer, initialAuthState } from './authReducer'

const authContext = createContext()

function AuthProvider(props) {

    /**
     * if we simply wanted to propagte the global data (state) and
     * it's manipulator (setState method), we would have
     * used [state, setState] = useState(initial_state) and then passed
     * these to the value parameter in authContext.Provider. It would then be
     * globally accessible to all components who are within the 
     * 1. <AuthProvider> component and 2. calls [data] = useContext(authContext).
     * For example: dev ed: https://www.youtube.com/watch?v=35lXWvCuM8o
     * 
     * But since this way of data manipulation is undesirable, we'll 
     * instead use Redux pattern of state management using context API.
     * We'll follow: https://github.com/rohanfaiyazkhan/react-context-api-example/blob/master/src/App.js
     */

    const [authState, authDispatcher] = useReducer(authReducer, initialAuthState)


    return (
        <authContext.Provider value={[authState, authDispatcher]}>
            {props.children}
        </authContext.Provider>
    )

}

export { AuthProvider, authContext }