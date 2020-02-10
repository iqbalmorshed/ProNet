import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Password2(props) {

    const { password1, password2, setPassword2, setIsPassword2Valid } = props.value
    const [isError, setIsError] = useState(false)
    const [helperText, setHelperText] = React.useState("")


    const handleChange = e => {
        e.preventDefault()
        setPassword2(e.target.value)

        const password2 = e.target.value
        if (password1 !== password2) {
            setIsError(true)
            setHelperText("Password didn't match with the previous one")
        }
        else {
            setIsError(false)
            setHelperText("")
            setIsPassword2Valid(true)
        }
    }

    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                value={password2}
                onChange={handleChange}
                error={isError}
                helperText={helperText}
            />
        </Grid>
    )
}

export default Password2
