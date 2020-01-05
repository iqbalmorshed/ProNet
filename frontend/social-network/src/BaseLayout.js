import React from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'
import NetworkLayout from './layout/NetworkLayout'
import { layoutInfo } from './data/layoutInfo'

function BaseLayout() {
    return (
        <Router>
           <NetworkLayout layoutInfo = {layoutInfo}/>
        </Router>
    )
}

export default BaseLayout
