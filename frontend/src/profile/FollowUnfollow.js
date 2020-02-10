import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { useApi } from '../apiCommunication/useApi'
import { operations } from '../data/apiOperations'

let isFollowingUpdated = true

function FollowUnfollow(props) {



    const { userInfo, currentUsername } = props

    const [isFollowing, setIsfollowing] = useState(() => {
        const followerList = userInfo.connections.followers.map(follower => follower.follower)
        if (followerList.includes(currentUsername))
            return true
        return false

    })

    const [visibleText, setVisibleText] = useState("")
    const [hiddenText, setHiddenText] = useState("")
    const [buttonColor, setButtonColor] = useState("orange")
    //hiddenText, buttonColor

    const [[isFollowLoading, isFollowSuccess, isFollowError,], setFollowData]
        = useApi(operations.FOLLOW, {})
    const [[isUnfollowLoading, isUnfollowSuccess, isUnfollowError,], setUnfollowData]
        = useApi(operations.UNFOLLOW, {})

    const handleOnClick = e => {
        e.preventDefault()
        if(isFollowingUpdated){
            if (isFollowing) {
                setUnfollowData({
                    urlVariables: [userInfo.username]
                })
            } else {
                setFollowData({
                    payload: {
                        followee: userInfo.username,
                    }
                })
            }
            isFollowingUpdated = false
        }
    }

    useEffect(() => {
        if (isFollowSuccess)
            setIsfollowing(true)
    }, [isFollowSuccess, isUnfollowSuccess])

    useEffect(() => {
        if (isUnfollowSuccess)
            setIsfollowing(false)
    }, [isUnfollowSuccess])

    useEffect(() => {
        isFollowingUpdated = true

        if (isFollowing) {
            setVisibleText("Following")
            setHiddenText("Unfollow")
            setButtonColor("green")
        } else {
            setVisibleText("Follow")
            setHiddenText("Follow")
            setButtonColor("blue")

        }
    }, [isFollowing])

    return (
        <Card.Content extra>
            <Button disabled={isFollowLoading || isUnfollowLoading}
                //primary
                animated='fade'
                onClick={handleOnClick}
                color={isFollowLoading || isUnfollowLoading
                    ? 'grey'
                    : buttonColor}
            >
                <Button.Content visible>{visibleText}</Button.Content>
                <Button.Content hidden>{hiddenText}</Button.Content>
            </Button>
            {isFollowError || isUnfollowError ? <div>Operation Unsuccessfull. Try again</div> : null}
        </Card.Content>
    )
}

export default FollowUnfollow
