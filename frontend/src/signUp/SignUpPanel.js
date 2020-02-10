import React, {useState} from 'react'
import SignUpForm from './SignUpForm'
import Confirmation from './Confirmation'

function SignUpPanel(props) {

    const {setShowSignUp} = props
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)

    if (!isSignUpSuccess){
        return <SignUpForm 
                    setIsSignUpSuccess={setIsSignUpSuccess}
                    setShowSignUp = {setShowSignUp}
                />
    }
        
    else{
        return <Confirmation 
                    setIsSignUpSuccess={setIsSignUpSuccess}
                    setShowSignUp = {setShowSignUp} 
                />
    }
        
}

export default SignUpPanel
