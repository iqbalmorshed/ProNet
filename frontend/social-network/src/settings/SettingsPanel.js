import React, { useContext } from 'react'

import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom'

import EditProfile from './EditProfile'
import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { authContext } from '../context/authStore'
function SettingsPanel() {

    const [{ token, username },] = useContext(authContext)

    if (!token) {
        return <Redirect to='/' />
    }

    return (
        <NetworkLayout layoutInfo={layoutInfo}>
            <Grid container spacing={5}>
                <EditProfile username={username} />
            </Grid>
        </NetworkLayout>
    )
}

export default SettingsPanel
