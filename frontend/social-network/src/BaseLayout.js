import React from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'
import NetworkLayout from './layout/NetworkLayout'
import { layoutInfo } from './data/layoutInfo'
import { sidebarInfo } from './data/sidebarInfo'
import Sidebar from './layout/Sidebar'

function BaseLayout() {
    return (
        <Router>
           <NetworkLayout layoutInfo = {layoutInfo}>
               <Sidebar sidebarInfo = {sidebarInfo}/>
           </NetworkLayout>
        </Router>
    )
}

export default BaseLayout
