import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Spinner from '../images/spinner'

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import Container from '@material-ui/core/Container';
import Username from './Username';
import Email from './Email';
import Password1 from './Password1';
import Password2 from './Password2'
import Agreement from './Agreement';
import { useApi } from '../apiCommunication/useApi';
import { operations } from '../data/apiOperations';
import ErrorMessage from './ErrorMessage';



export default function SignUpForm(props) {

  const { setIsSignUpSuccess, setShowSignUp } = props

  const classes = useStyles();
  const [[isLoading, isSuccess, isError, resultData], setData]
    = useApi(operations.PERFORM_REGISTRATION, {})

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [agreed, setAgreed] = useState(false)

  const [isUsernameValid, setIsUsernameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPassword1Valid, setIsPassword1Valid] = useState(false)
  const [isPassword2Valid, setIsPassword2Valid] = useState(false)



  function onSubmit(event) {
    console.log("submitted data")
    event.preventDefault()
    //attemptLogin(username, password, authDispatch)

    setData({
      payload: {
        username,
        email,
        password: password1,
        re_password: password2,
      }
    })
  }

  if (isSuccess) {
    setIsSignUpSuccess(true)
  }

  //console.log("isLoading:",isLoading, "isSuccess:")
  if (isError) {
    console.log(resultData)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>

            <Username value={{ username, setUsername, setIsUsernameValid }} />
            <Email value={{ email, setEmail, setIsEmailValid }} />
            <Password1 value={{ password1, setPassword1, setIsPassword1Valid }} />
            <Password2 value={{ password1, password2, setPassword2, setIsPassword2Valid }} />
            <Agreement value={{ agreed, setAgreed }} />

          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={
              isLoading ||
              !(isUsernameValid
                && isEmailValid
                && isPassword1Valid
                && isPassword2Valid
                && agreed)
            }
          >
            {!!isLoading && <Spinner width="15px" />}
            <span>{!!isLoading ? 'Please wait' : 'Sign Up'}</span>
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="" variant="body2" onClick={() => { setShowSignUp(false) }}>
                Already have an account? Sign in
              </Link>
            </Grid>
            <Grid item>
              {isError ? <ErrorMessage /> : null}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
        {/* {isError ? <ErrorMessage /> : null} */}
      </Box>
    </Container>
  );
}
