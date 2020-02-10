import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
}));

function TimerDisplay(props) {
    

    const classes = useStyles();
    const { title, description } = props.info
    //console.log("title", title, description)
    return (
        <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography>{description}</Typography>
        </Paper>
    )
}

export default TimerDisplay
