import React from 'react'
import { Pagination } from "semantic-ui-react";

function PostPagination(props) {

    const { currentPage, totalPages, setCurrentPage } = props.paginationInfo
    // console.log(props)
    // const {setCurrentPage} = props
    const handlePageChange = (e, propsData) => {
        setCurrentPage(propsData.activePage)

    }
    return (
        <Pagination
            activePage={currentPage}
            totalPages={totalPages}
            siblingRange={0}
            onPageChange={handlePageChange}
        />
    )
}

export default PostPagination
