import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { useApi } from '../apiCommunication/useApi'
import { operations } from '../data/apiOperations'


// let visibleText = ""
// let hiddenText = ""
// let buttonColor = "orange"

function FollowUnfollow(props) {



    const { userInfo, currentUsername, setFollowers } = props

    const [isFollowing, setIsFollowing] = useState(false)

    useEffect(() => {
        
        const followerList = userInfo.connections.followers.map(follower => follower.follower)
        if (followerList.includes(currentUsername)) {
            setIsFollowing(true)
        } else {
            setIsFollowing(false)
        }

    }, [currentUsername, userInfo.connections.followers])


    //hiddenText, buttonColor

    const [[, , isFollowError,], setFollowData]
        = useApi(operations.FOLLOW, {})
    const [[, , isUnfollowError,], setUnfollowData]
        = useApi(operations.UNFOLLOW, {})

    const handleOnClick = e => {
        e.preventDefault()
        if (isFollowing) {
            setUnfollowData({
                urlVariables: [userInfo.username]
            })
            setFollowers(prevFollowers => {
                const newFollowers = [...prevFollowers]
                return newFollowers.filter(follower => follower.follower !== currentUsername)
            })
            setIsFollowing(false)

        } else {
            setFollowData({
                payload: {
                    followee: userInfo.username,
                }
            })
            setFollowers(prevFollowers => {
                const newFollowers = [{
                    follower: currentUsername,
                    since: new Date().getFullYear(),
                }]
                return newFollowers.concat(prevFollowers)
            })
            setIsFollowing(true)
        }
    }

    // useEffect(() => {

    //     console.log("useEffect 2 executed")

    //     if (isFollowing) {

    //         visibleText = "Following"
    //         hiddenText = "Unfollow"
    //         buttonColor = "green"
    //     } else {

    //         visibleText = "Follow"
    //         hiddenText = "Follow"
    //         buttonColor = "blue"
    //     }
    // }, [isFollowing])

    // console.log("visibleText:", visibleText, "Hidden Text:", hiddenText, "buutoncolor:", buttonColor)


    return (

        <Card.Content extra>

            {/* <Button disabled={isFollowLoading || isUnfollowLoading}
                //primary
                animated='fade'
                onClick={handleOnClick}
                color={isFollowLoading || isUnfollowLoading
                    ? 'grey'
                    : buttonColor}
            > */}
            {
                isFollowing ?
                    <Button animated='fade' color="green" onClick={handleOnClick}>
                        <Button.Content visible>Following</Button.Content>
                        <Button.Content hidden>Unfollow</Button.Content>
                    </Button>
                    :
                    <Button animated='fade' color="blue" onClick={handleOnClick}>
                        <Button.Content visible>Follow</Button.Content>
                        <Button.Content hidden>Follow</Button.Content>
                    </Button>
            }


            {isFollowError || isUnfollowError ? <div>Operation Unsuccessfull. Try again</div> : null}
        </Card.Content>
    )
}

export default FollowUnfollow
