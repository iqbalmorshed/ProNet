import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';

import { useParams } from 'react-router-dom'

import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { sidebarInfo } from '../data/sidebarInfo'
import Sidebar from '../sidebar/Sidebar'
import ViewProfile from './ViewProfile';
import { authContext } from '../context/authStore'
import PostListCollectDisplay from '../posts/postList/PostListCollectDisplay'

function ProfilePanel() {

    const [{ username },] = useContext(authContext)
    const currentUsername = username
    let profileUsername = null

    let { user } = useParams();
    //console.log("typeof user", typeof user, "currentUsername:", currentUsername )
    if (typeof user === 'undefined') {
        profileUsername = currentUsername
    } else {
        profileUsername = user
    }
    //console.log("ProfilePane: username:", profileUsername)
    if (!profileUsername)
        return <div>Loading ...</div>

    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={5}>
                    <PostListCollectDisplay username={profileUsername} />
                    <ViewProfile username={profileUsername} />
                    <Sidebar sidebarInfo={sidebarInfo} />
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default ProfilePanel
