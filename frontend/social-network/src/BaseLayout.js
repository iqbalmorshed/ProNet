import React from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'
import NetworkLayout from './layout/NetworkLayout'
import { layoutInfo } from './data/layoutInfo'
import { sidebarInfo } from './data/sidebarInfo'
import Sidebar from './layout/Sidebar'
import {AuthProvider} from './context/authStore'

function BaseLayout() {
    return (
        <AuthProvider>
            <Router>
                <NetworkLayout layoutInfo = {layoutInfo}>
                    <Sidebar sidebarInfo = {sidebarInfo}/>
                </NetworkLayout>
            </Router>
        </AuthProvider>
        
    )
}

export default BaseLayout
