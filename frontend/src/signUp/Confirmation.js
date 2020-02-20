import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Message } from 'semantic-ui-react'

function Confirmation(props) {

    const { setIsSignUpSuccess, setShowSignUp } = props
    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Congratulations
                </Typography>


                <Grid container justify="flex-end">
                    <Message
                        success
                        header='Your have successfully registered'
                        content='Please check your email and click the account activation link before Sign in.'
                    />
                    <Grid item>
                        <Link href="" variant="body2" onClick={() => { setShowSignUp(false) }}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="" variant="body2" onClick={() => { setIsSignUpSuccess(false) }}>
                            Could not sign up correctly? No problem, Sign up again.
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={5}>
                {/* <Copyright /> */}
            </Box>
        </Container>
    )
}

export default Confirmation
