import React, { useContext } from 'react'

import { authContext } from '../context/authStore'
import SignInForm from './SignInForm'


function SignInPanel() {

    const [{ isLoggedIn, error }, authDispatch] = useContext(authContext)

    console.log("in SignInPanel:", isLoggedIn, error)

    return isLoggedIn ? null : <SignInForm />

}

export default SignInPanel
