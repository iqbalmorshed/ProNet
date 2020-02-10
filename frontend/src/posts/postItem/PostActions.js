import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Label, Icon } from 'semantic-ui-react'

const useStyles = makeStyles(theme => ({

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function PostActions(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = props.expansionState
    const post = props.post
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            {/* <IconButton aria-label="share">
                <ShareIcon />
            </IconButton> */}
            <Button as='div' labelPosition='right'>
                <Button basic color='black'>
                    <Icon name='comments' />
                    {/* Comments */}
                </Button>
                <Label as='a' basic color='black' pointing='left'>
                    {post.comments.length}
                </Label>
            </Button>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </>
    )
}

export default PostActions
