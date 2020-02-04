import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import Username from './Username'
import Password from './Password'
import Registration from './Registration'
import { useStyles } from './styles'
import { attemptLogin } from '../context/auth'
import { authContext } from '../context/authStore'
import Spinner from '../images/spinner'


export default function SignInForm(props) {
  const classes = useStyles();

  const [{ error, loading }, authDispatch] = useContext(authContext)
  //const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  function onSubmit(event) {
    event.preventDefault()
    attemptLogin(username, password, authDispatch)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>

          <Username value={{ username, setUsername, error }} />
          <Password value={{ password, setPassword, error }} />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {!!loading && <Spinner width="15px" />}
            <span>{!!loading ? 'Please wait' : 'Sign In'}</span>
          </Button>

          <Registration setShowSignUp={props.setShowSignUp} />

        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}