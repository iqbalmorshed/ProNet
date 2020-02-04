import React from 'react'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

function Registration(props) {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
              </Link>
      </Grid>
      <Grid item>
        <Link variant="body2" onClick={() => { props.setShowSignUp(true) }}>
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  )
}

export default Registration
