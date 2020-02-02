import React from 'react'

import { useApi } from '../../apiCommunication/useApi'
import { postOperations } from '../../data/apiOperations';
import PostPlaceholder from './PostPlaceholder'
import PostList from './PostList'
import { postPerPage } from '../../data/apiInfo'

function PostListCollectDisplay(props) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [[isLoading, isFetchPostSuccess, isFetchPostError, postListData], setFetchPostData]
        = useApi(postOperations.POST_LIST, {})

    React.useEffect(() => {
        setFetchPostData({
            urlVariables: [currentPage],
        })
    }, [currentPage, setFetchPostData])
    //posts = ['hello world', 'what are you doing']

    if (isLoading) {
        return <PostPlaceholder />
    }

    if (isFetchPostError) {
        return <div>The request did not succeed.</div>;
    }

    if (isFetchPostSuccess) {

        if (postListData) {
            //console.log("success")
            const data = postListData
            const posts = data.results
            const paginationInfo = {
                totalItems: data.count,
                totalPages: Math.ceil(data.count / postPerPage),
                currentPage: currentPage,
                setCurrentPage: setCurrentPage,
            }

            return (
                <PostList paginationInfo={paginationInfo} >
                    {posts}
                </PostList>
            )
        }


    }
    return null;

}

export default PostListCollectDisplay
