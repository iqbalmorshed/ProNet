import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Form, TextArea } from 'semantic-ui-react'

function PostContent(props) {
    const { title, body, editMode } = props

    const handleOnSubmit = e => {

    }
    if (editMode) {
        return (
            <Form onSubmit={handleOnSubmit}>
                <Form.Input
                    value={title}
                />
                <Form.Field
                    control={TextArea}
                    // onChange={handleOnChange}
                    // onKeyDown={onEnterPress}
                    value={body}
                />

            </Form>
        )
    } else {
        return (
            <>
                <Typography variant="h6" color="initial" component="p">
                    {title}
                </Typography>
                <Typography variant="body1" color="initial" component="p">
                    {body}
                </Typography>
            </>
        )
    }

}

export default PostContent
