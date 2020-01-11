import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import PostPagination from './PostPagination'
//import Markdown from './Markdown';
import PostDetailsCard from './postItem/PostDetailsCard'
import NewPostContainer from './NewPost/NewPostContainer';
import {componentStateContext} from '../context/componentStateStore'

export default function PostList(props) {
  const {newPostState} = React.useContext(componentStateContext)
  const [newPost,] = newPostState
  const posts = props.children;

  //posts = ['hello world', 'what are you doing']  
  return (
    <Grid item xs={12} md={8}>

        {
          newPost?
          <NewPostContainer newPostState={newPostState}/>
          :null
        }    
          
      <Typography variant="h6" gutterBottom>
        All posts from all users
      </Typography>
      <Divider />

      <Grid container spacing={2}>
        {posts.map(post => (
          <PostDetailsCard post={post} key={post.id} />
        ))}

        <Divider />
        <Grid item>
          <PostPagination paginationInfo={props.paginationInfo} />
        </Grid>
      </Grid>



    </Grid>
  );
}