import React from 'react'
import Grid from '@material-ui/core/Grid';

import { useParams } from 'react-router-dom'

import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { sidebarInfo } from '../data/sidebarInfo'
import Sidebar from '../sidebar/Sidebar'
import ViewAllPosts from '../posts/ViewAllPosts';
import ActivationMessage from './ActivationMessage'



function AccountActivation() {

    let { uid, token } = useParams();

    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={3}>
                    <ViewAllPosts />
                    <Sidebar sidebarInfo={sidebarInfo} >
                        <ActivationMessage userInfo={{ uid, token }} />
                    </Sidebar>
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default AccountActivation
