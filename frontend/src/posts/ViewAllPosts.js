import React from 'react'
import PostListCollectDisplay from './postList/PostListCollectDisplay'

function ViewAllPosts() {
    //const [currentPage, setCurrentPage] = React.useState(1)

    //const url = getUrl(postOperations.POST_LIST) + '?page=' + currentPage
    //return <PostData currentPage={currentPage} setCurrentPage={setCurrentPage} url={url} />
    return <PostListCollectDisplay username={'__ALL__'} />
}

export default ViewAllPosts
