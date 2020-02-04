import React from 'react'
import TextField from '@material-ui/core/TextField';



function Username(props) {
    const { username, setUsername, error } = props.value

    const handleChange = e => {
        setUsername(e.target.value)
    }
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleChange}
            error={error ? true : false}
            helperText={"username and/or password is incorrect"}
        />
    )
}

export default Username
