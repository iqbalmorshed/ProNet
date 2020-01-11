import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';

import CommentList from '../comments/CommentList';
import PostContent from './PostContent'
import PostActions from './PostActions'
import { authContext } from '../../context/authStore'
import PostHeader from './PostHeader'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function PostDetailsCard(props) {

  const [{ username },] = React.useContext(authContext)

  const post = props.post
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false)

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card}>

        <PostHeader post={post} loggedInUser={username} editModeState={[editMode, setEditMode]} />

        <CardContent>
          <PostContent 
            title={post.title} 
            body={post.body} 
            editMode={editMode}
            setEditMode={setEditMode} 
          />
        </CardContent>

        <CardActions disableSpacing>
          <PostActions expansionState={[expanded, setExpanded]} />
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <CommentList postId={post.id}>
              {post.comments}
            </CommentList>

          </CardContent>
        </Collapse>
      </Card>

    </Grid>

  );
}
