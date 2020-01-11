import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: red[500],
    },
}));

function Header(props) {

    const classes = useStyles();
    return (
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
            }

            title={props.loggedInUser}
            subheader="New post"
        />
    )
}

export default Header
