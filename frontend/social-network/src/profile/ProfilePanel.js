import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';

import { useParams, Redirect } from 'react-router-dom'

import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import ViewProfile from './ViewProfile';
import { authContext } from '../context/authStore'
import PostListCollectDisplay from '../posts/postList/PostListCollectDisplay'

function ProfilePanel() {

    const [{ token, username },] = useContext(authContext)

    const currentUsername = username
    let profileUsername = null

    let { user } = useParams();

    if (typeof user === 'undefined') {
        profileUsername = currentUsername
    } else {
        profileUsername = user
    }

    if (!token) {
        return <Redirect to='/' />
    }

    if (!profileUsername)
        return <div>Loading ...</div>


    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={5}>
                    <PostListCollectDisplay username={profileUsername} />
                    <ViewProfile profileUsername={profileUsername} currentUsername={currentUsername} />
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default ProfilePanel
