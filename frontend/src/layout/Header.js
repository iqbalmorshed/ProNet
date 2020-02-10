import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { authContext } from '../context/authStore';
import { attemptLogout } from '../context/auth'
import { componentStateContext } from '../context/componentStateStore'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [{ token, username }, authDispatch] = useContext(authContext)
  const { sections, title } = props;
  const user_name = token ? username : 'User'

  const { newPostState } = React.useContext(componentStateContext)
  //console.log("in layout:header.js: newPostState", x)
  const [, setNewPost] = newPostState

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Hi, {user_name}!</Button>
        
        
        
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          {/* <SearchIcon /> */}
        </IconButton>

        {!token? null: 
          <>
            <Button
            variant="outlined"
            size="small"
            onClick={() => {
              attemptLogout(authDispatch)
            }}
          >
            Logout
          </Button>
            <Button variant="outlined" size="small" onClick={() => setNewPost(true)}>
            New Post
          </Button>
          </>
            
        }

        


      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (

          <RouterLink key={section.title} to={section.path}>
            {section.title}
          </RouterLink>

        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
