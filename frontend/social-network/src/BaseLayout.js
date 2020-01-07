import React, { useContext, useEffect } from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'
import NetworkLayout from './layout/NetworkLayout'
import { layoutInfo } from './data/layoutInfo'
import { sidebarInfo } from './data/sidebarInfo'
import Sidebar from './layout/Sidebar'
import { authContext } from './context/authStore'
import { checkAuthStatus } from './context/auth'


function BaseLayout() {

    const [ ,authDispatch] = useContext(authContext)
    //checkAuthStatus(authDispatch)
    useEffect(()=>{
        checkAuthStatus(authDispatch)
    }, [authDispatch])

    return (

        <Router>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Sidebar sidebarInfo={sidebarInfo} />
            </NetworkLayout>
        </Router>
    )
}

export default BaseLayout
