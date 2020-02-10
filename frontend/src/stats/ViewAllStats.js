import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SummaryStat from './SummaryStat'



function ViewAllStats() {
    return (
        <Grid item xs={12} md={8}>

            <Typography variant="h6" gutterBottom>
                Summary Satistics
            </Typography>
            <Divider />
            <SummaryStat />


        </Grid>
    )
}

export default ViewAllStats
