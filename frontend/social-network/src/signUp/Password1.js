import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Password1(props) {

    const { password1, setPassword1, setIsPassword1Valid } = props.value
    const [isError, setIsError] = useState(false)
    const [helperText, setHelperText] = useState("")

    
    useEffect(()=>{
        //console.log("password1 :", password1)
        
    },[password1])

    const handleChange = e => {
        setPassword1(e.target.value)

        const password1 = e.target.value
        if (password1.length < 8) {
            setIsError(true)
            setHelperText("password must be at least 8 character long")
        }
        else {
            setIsError(false)
            setHelperText("")
            setIsPassword1Valid(true)
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
                id="password"
                autoComplete="current-password"
                value={password1}
                onChange={handleChange}
                error={isError}
                helperText={helperText}
            />
        </Grid>
    )
}

export default Password1
