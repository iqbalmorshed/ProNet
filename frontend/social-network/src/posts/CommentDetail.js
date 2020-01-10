import React, { useState } from 'react'
import { Comment } from 'semantic-ui-react'

import ReplyList from './ReplyList'

function CommentDetail(props) {

    const [replyClicked, setReplyClicked] = useState(false)
    const [targetUserForReply, setTargetUserForReply] = useState("")
    const replyClickData = { replyClicked, setReplyClicked, targetUserForReply, setTargetUserForReply }

    const comment = props.data

    const onClick = (e, data) => {
        if (comment.parent) {
            console.log("this is reply")
            const { setReplyClicked, setTargetUserForReply } = props.replyClickData
            setReplyClicked(true)
            setTargetUserForReply(comment.author)
        } else {
            console.log("this is comment")
            setReplyClicked(true)
            setTargetUserForReply(comment.author)
        }
        console.log(comment.author)

    }


    return (
        <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{comment.author}</Comment.Author>
                <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                </Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions onClick={onClick}>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Edit</Comment.Action>
                    <Comment.Action>Delete</Comment.Action>
                </Comment.Actions>
            </Comment.Content>


            {
                comment.replies ?
                    <ReplyList postId={comment.post} parentId={comment.id} replyClickData={replyClickData}>
                        {comment.replies}
                    </ReplyList>
                    : null
            }
        </Comment>
    )
}

export default CommentDetail
