import React, { useContext } from 'react'

import { authContext } from '../context/authStore'
import SignInForm from './SignInForm'


function SignInPanel() {

    const [{ token}, ] = useContext(authContext)

    return token ? null : <SignInForm />

}

export default SignInPanel
