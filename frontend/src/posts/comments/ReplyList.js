import React, { useContext, useEffect, useState } from 'react'
import { Comment } from 'semantic-ui-react'
import CommentDetail from './CommentDetail'
import CommentCreate from './CommentCreate'
import { authContext } from '../../context/authStore'

function ReplyList(props) {
    const [{ token, username },] = useContext(authContext)
    const { replyClicked } = props.replyClickData
    const [replies, setReplies] = useState([])

    useEffect(() => {
        setReplies(props.children)
    }, [props.children])

    //console.log("reply List:", replies)

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
                        setComments={setReplies}
                    />
                    : null
            }
        </Comment.Group>
    )
}

export default ReplyList
