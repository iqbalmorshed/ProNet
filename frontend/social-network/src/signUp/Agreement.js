import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Agreement(props) {
    const {agreed, setAgreed} = props.value

    const handleChange = () =>{
        setAgreed( agreed => (!agreed))
    }
    return (
        <Grid item xs={12}>
            <FormControlLabel
            control={<Checkbox 
                checked={agreed}
                onChange={handleChange}
                value="allowExtraEmails" 
                color="primary" />}
            label="I agree to the ProNet conditions"
            />
        </Grid>
    )
}

export default Agreement
