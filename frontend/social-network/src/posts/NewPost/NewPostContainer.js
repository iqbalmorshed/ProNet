import React from 'react'

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

import Body from './Body'
import Header from './Header'
import {authContext} from '../../context/authStore'
import {componentStateContext} from '../../context/componentStateStore'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
  },
}));

function NewPostContainer(props) {
  const [{ username },] = React.useContext(authContext)
  const { newPostState } = React.useContext(componentStateContext)
  const classes = useStyles()

  return (
      <Card className={classes.card}>

      <Header loggedInUser={username} />

      <CardContent>
        <Body newPostState={newPostState}/>
      </CardContent>

      {/* <CardActions disableSpacing>
        <PostActions expansionState={[expanded, setExpanded]} />
      </CardActions> */}

    </Card>

  )
}

export default NewPostContainer
