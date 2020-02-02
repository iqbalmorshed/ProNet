import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Form, TextArea, Button } from 'semantic-ui-react'
import { operations } from '../../data/apiOperations'
import { useApi } from '../../apiCommunication/useApi'

function PostContent(props) {
    const [[ /*isLoading*/, isUpdateSuccess, isUpdateError], setUpdateData]
        = useApi(operations.POST_UPDATE, {})

    const { id, title, body, editMode, setEditMode } = props
    const [editedTitle, setEditedTitle] = React.useState(title)
    const [editedBody, setEditedBody] = React.useState(body)

    const handleEdit = () => {
        //e.preventDefault()
        setUpdateData({
            urlVariables: [id,],
            payload: {
                title: editedTitle,
                body: editedBody,
            }
        })
    }

    const handleDiscard = () => {
        setEditedTitle(title)
        setEditedBody(body)
        setEditMode(false)
    }

    if (isUpdateSuccess && editMode)
        setEditMode(false)

    if (editMode) {
        return (

            <Form>
                <Form.Input
                    value={editedTitle}
                    onChange={e => { setEditedTitle(e.target.value) }}
                />
                <Form.Field
                    control={TextArea}
                    onChange={e => { setEditedBody(e.target.value) }}
                    // onKeyDown={onEnterPress}
                    value={editedBody}
                />
                {isUpdateError ? <div>Error occured while Editing</div> : null}
                <Button primary onClick={handleEdit}>Edit</Button>
                <Button secondary onClick={handleDiscard}>Cancel</Button>
            </Form>
        )
    } else {
        return (
            <>
                <Typography variant="h6" color="initial" component="p">
                    {editedTitle}
                </Typography>
                <Typography variant="body1" color="initial" component="p">
                    {editedBody}
                </Typography>
            </>
        )
    }

}

export default PostContent
