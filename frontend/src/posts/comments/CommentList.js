import React, {useContext} from 'react'
import { Comment, Header } from 'semantic-ui-react'
import CommentDetail from './CommentDetail'
import CommentCreate from './CommentCreate'

import { authContext } from '../../context/authStore'

function CommentList(props) {
    const [{ token, username },] = useContext(authContext)
    const comments = props.children
    return (
        <Comment.Group threaded>
            <Header as='h3' dividing>
                Comments
            </Header>

            {comments.map(comment => (
                <CommentDetail key={comment.id} data={comment} />
            ))}

            {
                token?
                    <CommentCreate type="comment" postId={props.postId} parentId={null} author={username}/>
                    :null
                
            }
            
        </Comment.Group>
    )

}
export default CommentList
