import React from 'react'

import { postUrl } from '../data/apiInfo'
import PostData from './PostData'

function ViewAllPosts() {
    const [currentPage, setCurrentPage] = React.useState(1)

    const url = postUrl + '?page=' + currentPage
    return <PostData currentPage={currentPage} setCurrentPage={setCurrentPage} url={url} />
}

export default ViewAllPosts
