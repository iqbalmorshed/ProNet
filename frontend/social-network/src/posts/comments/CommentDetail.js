import React, { useState, useContext } from 'react'
import { Comment, Form, TextArea } from 'semantic-ui-react'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'

import ReplyList from '../postItem/ReplyList'
import { useApi } from '../../apiCommunication/useApi'
import { operations } from '../../data/apiOperations'
import { authContext } from '../../context/authStore'

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: red[500],
    },
}));

function CommentDetail(props) {
    const classes = useStyles();

    const [{ token, },] = useContext(authContext)

    const [[ /*isLoading*/, isEditSuccess, isEditError], setData]
        = useApi(operations.COMMENT_UPDATE, {})

    const [[ /*isDeleteLoading*/, isDeleteSuccess, isDeleteError], setDeleteData]
        = useApi(operations.COMMENT_DELETE, {})

    const comment = props.data
    const [commentBody, setCommentBody] = useState(comment.body)
    const [replyClicked, setReplyClicked] = useState(false)
    const [targetUserForReply, setTargetUserForReply] = useState("")
    const [editMode, setEditMode] = useState(false)
    const replyClickData = { replyClicked, setReplyClicked, targetUserForReply, setTargetUserForReply }

    const handleReply = (e, data) => {
        if (comment.parent) {
            //console.log("this is reply")
            const { setReplyClicked, setTargetUserForReply } = props.replyClickData
            setReplyClicked(true)
            setTargetUserForReply(comment.author)
        } else {
            //console.log("this is comment")
            setReplyClicked(true)
            setTargetUserForReply(comment.author)
        }
        //console.log(comment.author)

    }

    const handleEdit = (e, data) => {
        setEditMode(true)
    }

    const handleDelete = () => {
        setDeleteData({
            urlVariables: [comment.id,]
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setData({
            urlVariables: [comment.id,],
            payload: {
                parent: comment.parent,
                body: commentBody,
            }
        })

    }


    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            handleOnSubmit(e);
        }
    }

    if (isEditSuccess && editMode)
        setEditMode(false)

    if (isDeleteSuccess)
        return null

    return (
        <Comment>
            {/* <Comment.Avatar >
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {comment.author.substring(0, 2).toUpperCase()}
                </Avatar>
            </Comment.Avatar> */}
            {/* <Comment.Avatar >
            <Label circular color='red'>
                2
            </Label>
            </Comment.Avatar> */}
            {/* <Label circular color='red'>
                2
            </Label> */}
            <div className="avatar">
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {comment.author.substring(0, 2).toUpperCase()}
                </Avatar>
            </div>
            <Comment.Content>
                <Comment.Author >
                    <Link to={'/profile/'+comment.author}>{comment.author}</Link>    
                </Comment.Author>
                <Comment.Metadata>
                    <span>{Date(comment.created_at)}</span>
                </Comment.Metadata>
                <Comment.Text >
                    {
                        editMode ? (
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Field
                                    control={TextArea}
                                    placeholder={'Write a ' + props.type + ' ...'}
                                    onChange={e => { setCommentBody(e.target.value) }}
                                    onKeyDown={onEnterPress}
                                    value={commentBody}
                                />
                            </Form>
                        )
                            : commentBody
                    }
                </Comment.Text>
                {isEditError ? <div>Error: Could not edit properly</div> : null}
                {isDeleteError ? <div>Error: Could not delete properly</div> : null}
                {
                    token ?
                        <Comment.Actions >
                            <Comment.Action onClick={handleReply}>Reply</Comment.Action>
                            <Comment.Action onClick={handleEdit}>Edit</Comment.Action>
                            <Comment.Action onClick={handleDelete}>Delete</Comment.Action>
                        </Comment.Actions>
                        :
                        null
                }

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
