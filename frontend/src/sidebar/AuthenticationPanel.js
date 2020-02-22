import React from 'react'
import Paper from '@material-ui/core/Paper';
import SignInPanel from '../signIn/SignInPanel'

function AuthenticationPanel() {
    return (
        <Paper elevation={0}>
            <SignInPanel />
        </Paper>
    )
}

export default AuthenticationPanel
