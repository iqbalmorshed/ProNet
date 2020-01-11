import React from 'react'
import { Fetch } from 'react-request'
import PostPlaceholder from './PostPlaceholder'
import PostList from './PostList'
import { postPerPage } from '../data/apiInfo'

function PostData(props) {
    return (
        <Fetch url={props.url}>
            {({ fetching, failed, data }) => {
                if (fetching) {
                    return <PostPlaceholder />
                }

                if (failed) {
                    return <div>The request did not succeed.</div>;
                }

                if (data) {
                    //console.log("success")
                    const posts = data.results
                    const paginationInfo = {
                        totalItems: data.count,
                        totalPages: Math.ceil(data.count / postPerPage),
                        currentPage: props.currentPage,
                        setCurrentPage: props.setCurrentPage,
                    }

                    return (
                        <PostList paginationInfo={paginationInfo} >
                            {posts}
                        </PostList>
                    )
                }

                return null;
            }}
        </Fetch>
    )
}

export default PostData
