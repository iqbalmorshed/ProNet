import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


import { postOperations } from '../../data/apiOperations'
import { useApi } from '../../apiCommunication/useApi'

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: red[500],
    },
}));

function PostHeader(props) {
    const [[ /*isLoading*/, isDeleteSuccess, isDeleteError], setDeleteData]
        = useApi(postOperations.POST_DELETE, {})

    const { post, loggedInUser } = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [editMode, setEditMode] = props.editModeState
    const setIsPostAvailable = props.setIsPostAvailable

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        if (editMode)
            setEditMode(false)
        else
            setEditMode(true)

        setAnchorEl(null);
    }
    const handleDelete = () => {
        setDeleteData({
            urlVariables: [post.id,],
        })
        setAnchorEl(null);
    }

    const classes = useStyles();

    if (isDeleteSuccess)
        setIsPostAvailable(false)

    return (
        <>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>

                }
                title={post.author}
                subheader={post.time_since_created + " days ago"}
            />
            {isDeleteError ? <div>Error: Could not delete the Post</div> : null}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    post.author === loggedInUser ?
                        [<MenuItem key={1} onClick={handleEdit}>{editMode ? "Undo Edit" : "Edit Post"}</MenuItem>,
                        <MenuItem key={2} onClick={handleDelete}>Delete Post</MenuItem>,
                        ]
                        : null
                }
                <MenuItem key={3} onClick={handleClose}>Report this post</MenuItem>
            </Menu>
        </>
    )
}

export default PostHeader
