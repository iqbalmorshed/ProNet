import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Username(props) {

    const { username, setUsername, setIsUsernameValid } = props.value
    const [isError, setIsError] = useState(false)
    const [helperText, setHelperText] = React.useState("")

    const checkValidity = (e) => {

        const username = e.target.value
        const usernameLength = username.length
        if (usernameLength < 4) {
            setIsError(true)
            setHelperText("Username should be at least 4 character")
        }
        else if (usernameLength > 15) {
            setIsError(true)
            setHelperText("Username can be at most 15 character")
        }
        else {
            setIsError(false)
            setHelperText("")
            setIsUsernameValid(true)
        }
    }
    const handleChange = e => {
        setUsername(e.target.value)
        checkValidity(e)

    }

    const handleOnBlur = e => {
        checkValidity(e)
    }
    return (
        <>
            <Grid item xs={12}>
                <TextField
                    autoComplete="username"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    value={username}
                    onChange={handleChange}
                    error={isError}
                    helperText={helperText}
                    onBlur={handleOnBlur}
                />
            </Grid>
        </>
    )
}

export default Username
