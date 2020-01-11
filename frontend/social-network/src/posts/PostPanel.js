import React from 'react'
import Grid from '@material-ui/core/Grid';

import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { sidebarInfo } from '../data/sidebarInfo'
import Sidebar from './Sidebar'
import ViewAllPosts from './ViewAllPosts';

function PostPanel() {
    
    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={3}>
                    <ViewAllPosts/>
                    <Sidebar sidebarInfo={sidebarInfo} />
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default PostPanel
