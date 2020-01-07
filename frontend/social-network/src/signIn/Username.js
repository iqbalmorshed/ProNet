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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={username}
            onChange={handleChange}
            error={error? true:false}
            helperText={"username and/or password is correct"}
        />
    )
}

export default Username
