import React from 'react'

import {postOperations} from '../data/apiOperations'
import { getUrl } from '../data/apiInfo'
import PostData from './PostData'

function ViewAllPosts() {
    const [currentPage, setCurrentPage] = React.useState(1)

    const url = getUrl(postOperations.POST_LIST) + '?page=' + currentPage
    return <PostData currentPage={currentPage} setCurrentPage={setCurrentPage} url={url} />
}

export default ViewAllPosts
