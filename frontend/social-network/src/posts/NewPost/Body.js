import React from 'react'

//import TextField from '@material-ui/core/TextField';
import { Form, TextArea, Button } from 'semantic-ui-react'


function Body(props) {
    const [, setNewPost] = props.newPostState
    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")

    const handleOnSubmit = e => {
        setNewPost(false)
    }

    return (
        // semantic UI based form
        <Form onSubmit={handleOnSubmit}>
            <Form.Input
                placeholder="My title"
                value={title}
                onChange={e=>{setTitle(e.target.value)}}
            />
            <Form.Field
                placeholder="My thoughts..."
                control={TextArea}
                onChange={e=>{setBody(e.target.value)}}
                // onKeyDown={onEnterPress}
                value={body}
            />
            <Button primary>Post</Button>
        </Form>
    )
}

export default Body





// const useStyles = makeStyles(theme => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: 200,
//         },
//     },
// }));

/* <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="My title"
                    multiline
                    rowsMax="2"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    fullWidth={true}
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="My thoughts"
                    multiline
                    rows="10"
                    rowsMax="100"
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                    variant="outlined"
                    fullWidth={true}
                />
            </div>

        </form> */