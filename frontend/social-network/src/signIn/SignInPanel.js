import React, { useContext, useState } from 'react'

import { authContext } from '../context/authStore'
import SignInForm from './SignInForm'
import SignUpPanel from '../signUp/SignUpPanel'


function SignInPanel() {

    const [{ token },] = useContext(authContext)
    const [showSignUp, setShowSignUp] = useState(false)

    return token ? null : (
        showSignUp ?
            <SignUpPanel setShowSignUp={setShowSignUp} />
            : <SignInForm setShowSignUp={setShowSignUp} />
    )

}

export default SignInPanel
