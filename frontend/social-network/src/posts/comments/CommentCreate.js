import React, { useState } from 'react'
import { Comment, Form, TextArea } from 'semantic-ui-react'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { useApi } from '../../apiCommunication/useApi'
import { operations } from '../../data/apiOperations'


const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: red[500],
    },
}));

function CommentCreate(props) {
    const classes = useStyles();
    const [[ /*isLoading*/, isCreateSuccess, isCreateError], setCreateData]
        = useApi(operations.COMMENT_CREATE, {})

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

    const authorProfileLink = '/profile/' + author
    return (
        <Comment>
            <div className="avatar">
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {author.substring(0, 2).toUpperCase()}
                    </Avatar>

            </div>
            <Comment.Content>
                <Comment.Author as='a' href={authorProfileLink}>
                    {author}
                </Comment.Author>
                <Comment.Metadata>
                    <span>Today</span>
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
