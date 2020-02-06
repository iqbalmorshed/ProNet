import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';

import { Redirect } from 'react-router-dom'

import { authContext } from '../context/authStore'
import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { sidebarInfo } from '../data/sidebarInfo'
import Sidebar from '../sidebar/Sidebar'
import ViewAllStats from './ViewAllStats';

function StatPanel() {
    const [{ token, },] = useContext(authContext)

    if (!token) {
        return <Redirect to='/' />
    }

    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={3}>
                    <ViewAllStats />
                    <Sidebar sidebarInfo={sidebarInfo} />
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default StatPanel
