import React from 'react'
import { Message } from 'semantic-ui-react'

function ErrorMessage() {
    return (
        <Message
            error
            header='There was some errors with your submission'
            list={[
                'It may be because your username is already used. Please try with a unique username',
            ]}
        />
    )
}

export default ErrorMessage
