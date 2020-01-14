import React, { useState } from 'react'
import { Comment, Form, TextArea } from 'semantic-ui-react'

import { useApi } from '../../apiCommunication/useApi'
import { commentOperations } from '../../data/apiOperations'

function CommentCreate(props) {
    const [[ /*isLoading*/, isCreateSuccess, isCreateError], setCreateData]
        = useApi(commentOperations.COMMENT_CREATE, {})

    const { postId, parentId, author } = props

    const [text, setText] = useState(
        props.type === 'reply' ?
            "@" + props.replyClickData.targetUserForReply
            : ""
    )

    const handleOnChange = e => {
        setText(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setCreateData({
            urlVariables: [postId,],
            payload: {
                parent: parentId,
                body: text,
            }
        })
        setText('')

    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            handleOnSubmit(e);
        }
    }

    if (isCreateSuccess) {
        if (props.type === 'reply') {
            props.replyClickData.setReplyClicked(false)
        }

    }

    return (
        <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                </Comment.Metadata>
                <Comment.Text>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field
                            control={TextArea}
                            placeholder={'Write a ' + props.type + ' ...'}
                            onChange={handleOnChange}
                            onKeyDown={onEnterPress}
                            value={text}
                        />
                    </Form>
                    {isCreateError ? <div>Error in creating comment.</div> : null}
                </Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default CommentCreate
