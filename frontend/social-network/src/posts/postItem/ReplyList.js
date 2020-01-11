import React, {useContext} from 'react'
import { Comment } from 'semantic-ui-react'
import CommentDetail from '../comments/CommentDetail'
import CommentCreate from '../comments/CommentCreate'
import { authContext } from '../../context/authStore'

function ReplyList(props) {
    const [{ token, username },] = useContext(authContext)
    const { replyClicked } = props.replyClickData
    const replies = props.children
    return (
        <Comment.Group >
            {replies.map(reply => (
                <CommentDetail key={reply.id} data={reply} replyClickData={props.replyClickData} />
            ))}

            {
                replyClicked && token ?
                    <CommentCreate 
                        type="reply" 
                        postId={props.postId} 
                        parentId={props.parentId}
                        author={username}
                        replyClickData={props.replyClickData} 
                    />
                    : null
            }
        </Comment.Group>
    )
}

export default ReplyList
