import React from 'react'

import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom'

import EditProfile from './EditProfile'
import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'

function SettingsPanel(props) {

    const {loading, token, username} = props.authState

    if (loading === false && !token) {
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
