import React, { useContext, useEffect } from 'react'
//import Blog from './blog/Blog'
import { BrowserRouter as Router } from 'react-router-dom'

import { authContext } from './context/authStore'
import { checkAuthStatus } from './context/auth'
import PostPanel from './posts/PostPanel'

function BaseLayout() {

    const [ ,authDispatch] = useContext(authContext)
    //checkAuthStatus(authDispatch)
    useEffect(()=>{
        checkAuthStatus(authDispatch)
    }, [authDispatch])

    return (

        <Router>
            <PostPanel/>

        </Router>
    )
}

export default BaseLayout
