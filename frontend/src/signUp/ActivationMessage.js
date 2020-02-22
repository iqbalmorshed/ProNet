import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Message } from 'semantic-ui-react'

import { operations } from '../data/apiOperations';
import { useApi } from '../apiCommunication/useApi'

const successMessage = () => (
    <Message
        success
        header='Your account is activated'
        content='Thank you for verifying your email. Please Sign in now through the Sign in form'
    />
)

const errorMessage = () => (
    <Message
        error
        header='Error occured while activating'
        content='Sorry this activation link does not work. Please sign up again.'
    />
)

const LoadingMessage = () => (
    <Message
        color='orange'
        header='Loading activation information'
        content='Please wait while we check the validity of your activation link'
    />
)

function ActivationMessage(props) {

    const { uid, token } = props.userInfo
    const [[isActivationLoading, isActivationSuccess, isActivationError,], setActivationData]
        = useApi(operations.ACCOUNT_ACTIVATE, {})

    React.useEffect(() => {
        setActivationData({
            payload: {
                uid,
                token,
            }
        })

    }, [setActivationData, uid, token])

    let notice = null;
    if (isActivationLoading) {
        notice = LoadingMessage()
    }
    else if (isActivationSuccess) {
        notice = successMessage()
    }
    else if (isActivationError) {
        notice = errorMessage()
    }

    if (notice) {
        return (
            <Paper elevation={3}>
                {notice}
            </Paper>
        )
    }

    return null
}

export default ActivationMessage
