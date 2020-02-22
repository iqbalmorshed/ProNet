import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Advertise from "./Advertise";
import { authContext } from '../context/authStore'
import AuthenticationPanel from './AuthenticationPanel';

// const useStyles = makeStyles(theme => ({
//   sidebarAboutBox: {
//     padding: theme.spacing(2),
//     backgroundColor: theme.palette.grey[200],
//   },
//   sidebarSection: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function Sidebar(props) {
  const [{ token },] = useContext(authContext)
  //const classes = useStyles();
  const { description, title } = props.sidebarInfo;

  return (
    <Grid item xs={12} md={4}>
      {props.children}
      <AuthenticationPanel />
      <Advertise info={{ title, description }} token={token}/>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
