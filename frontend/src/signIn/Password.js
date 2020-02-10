import React from 'react'
import TextField from '@material-ui/core/TextField';

function Password(props) {

    const {password, setPassword, error} = props.value

    const handleChange = e => {
        setPassword(e.target.value)
    }
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {password}
            onChange = {handleChange}
            error={error? true:false}
            helperText={"username and/or password is correct"}
        />
    )
}

export default Password
