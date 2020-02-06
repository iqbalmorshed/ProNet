import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
//import { List } from 'semantic-ui-react'
import ConnectionList from './ConnectionList'
import FollowUnfollow from './FollowUnfollow';


const ProfileCard = (props) => {

    //console.log(props.data)
    const { data, currentUsername } = props
    const userInfo = data
    return (
        <Grid item xs={12} md={4}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{userInfo.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in {userInfo.joined}</span>
                    </Card.Meta>
                    <Card.Description>
                        <b>About me: </b>{userInfo.basic_info.intro_quote}
                    </Card.Description>
                    <Card.Description>
                        <b>Location: </b>{userInfo.address.city}, {userInfo.address.country}
                    </Card.Description>
                    <Card.Description>
                        <b>Email: </b>{userInfo.email}
                    </Card.Description>
                </Card.Content>
                {
                    userInfo.username !== currentUsername ?
                        <FollowUnfollow userInfo={userInfo} currentUsername={currentUsername} />
                        : null
                }

                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {userInfo.connections.followers.length} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <ConnectionList type={'follower'}>
                        {userInfo.connections.followers}
                    </ConnectionList>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {userInfo.connections.followees.length} Followees
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <ConnectionList type={'followee'}>
                        {userInfo.connections.followees}
                    </ConnectionList>
                </Card.Content>
            </Card>
        </Grid>
    )

}

export default ProfileCard