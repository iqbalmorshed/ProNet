import React, { useState } from 'react'
import { Comment, Form, TextArea } from 'semantic-ui-react'


function CommentCreate(props) {

    
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
        console.log("submit comment for post:", postId, " parentID", parentId)
        console.log("text body:", text)
        if (props.type === 'reply') {
            props.replyClickData.setReplyClicked(false)
        }
        setText('')
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            console.log("enter pressed")
            //e.preventDefault();
            handleOnSubmit(e);
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
                </Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default CommentCreate
