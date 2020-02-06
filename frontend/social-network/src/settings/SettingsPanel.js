import React,{useContext} from 'react'
import EditProfile from './EditProfile'
import Grid from '@material-ui/core/Grid';
import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import {authContext} from '../context/authStore'
function SettingsPanel() {

    const [{ username },] = useContext(authContext)

    return (
        <NetworkLayout layoutInfo={layoutInfo}>
            <Grid container spacing={5}>
                <EditProfile username={username}/>
            </Grid>
        </NetworkLayout>
    )
}

export default SettingsPanel
