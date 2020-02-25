import React from 'react'
import PropTypes from 'prop-types';

import { useApi } from '../../apiCommunication/useApi'
import { operations } from '../../data/apiOperations';
import PostPlaceholder from './PostPlaceholder'
import PostList from './PostList'
import { postPerPage } from '../../data/apiInfo'

function PostListCollectDisplay(props) {

    const { username } = props
    let operation
    const [currentPage, setCurrentPage] = React.useState(1)

    if (username === '__ALL__') {
        operation = operations.POST_LIST
    } else {
        operation = operations.POST_LIST_AUTHOR
    }


    const [[isLoading, isFetchPostSuccess, isFetchPostError, postListData], setFetchPostData]
        = useApi(operation, {})

    React.useEffect(() => {
        if (username === '__ALL__') {
            setFetchPostData({
                urlVariables: [currentPage],
            })

        } else {
            setFetchPostData({
                urlVariables: [username, currentPage],
            })

        }

    }, [setFetchPostData, currentPage, username])
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
                <PostList paginationInfo={paginationInfo} username={username}>
                    {posts}
                </PostList>
            )
        }


    }
    return null;

}

export default PostListCollectDisplay

PostListCollectDisplay.propTypes = {
    username: PropTypes.string.isRequired
}