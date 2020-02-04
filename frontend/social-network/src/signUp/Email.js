import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Email(props) {

    const { email, setEmail, setIsEmailValid } = props.value
    const [isError, setIsError] = useState(false)
    const [helperText, setHelperText] = React.useState("")

    const checkValidity = (e) => {
        const email = e.target.value
        if (email.includes('@') == false) {
            setIsError(true)
            setHelperText("Email should contain @ symbol")
        }
        else {
            setIsError(false)
            setHelperText("")
            setIsEmailValid(true)
        }
    }
    const handleChange = e => {
        setEmail(e.target.value)
        checkValidity(e)
    }
    // const handleOnBlur = e => {
    //     checkValidity()
    // }
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
                error={isError}
                helperText={helperText}
                //onBlur={handleOnBlur}
            />
        </Grid>
    )
}

export default Email
