import React, { useContext, useEffect } from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { authContext } from './context/authStore'
import { checkAuthStatus } from './context/auth'
import PostPanel from './posts/PostPanel'
import StatPanel from './stats/StatPanel'
import { paths } from './data/layoutInfo'
import ProfilePanel from './profile/ProfilePanel'
import SettingsPanel from './settings/SettingsPanel'

function BaseLayout() {

    const [authState, authDispatch] = useContext(authContext)
    //checkAuthStatus(authDispatch)
    useEffect(() => {
        checkAuthStatus(authDispatch)
    }, [authDispatch])

    return (

        <Router>
            <Switch>
                <Route exact path={paths.HOME}>
                    <PostPanel authState={authState}/>
                </Route>
                <Route path={paths.STATISTICS}>
                    <StatPanel authState={authState}/>
                </Route>
                <Route path={paths.PROFILE + '/:user?'}>
                    <ProfilePanel authState={authState}/>
                </Route>
                <Route path={paths.SETTINGS}>
                    <SettingsPanel authState={authState}/>
                </Route>
            </Switch>

        </Router>
    )
}

export default BaseLayout
