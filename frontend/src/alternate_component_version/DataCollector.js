// import React from 'react'

// import { connect } from 'react-refetch'

// function DataCollector(props) {

//     console.log("props current page:", props)

//     const { restApiOutput } = props

//     console.log("p:", restApiOutput.pending, "er ", restApiOutput.rejected, " s:", restApiOutput.success)
//     let postComponent
//     if (restApiOutput.pending) {
        
//         return { status: 0 }

//     } else if (restApiOutput.rejected) {
       
//         return { status: 1, error: restApiOutput.reason }

//     } else if (restApiOutput.fulfilled) {

//         return { status: 2, fetchData: restApiOutput.value }

//     }

//     console.log("Nothing returned")

// }

// export default connect(props => ({
//     restApiOutput: "http://127.0.0.1:8000/api/v1/posts/?page=1",
// }))(DataCollector)

//export default PostPanel