import React from 'react'
import { List, Image } from 'semantic-ui-react'

function ConnectionList(props) {
    return (
        <List>
            {props.children.map(person => (
                <List.Item key={props.type === 'follower' ? person.follower : person.followee}>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                    <List.Content>
                        <List.Header as='a'>{props.type === 'follower' ? person.follower : person.followee}</List.Header>
                        <List.Description>
                            since {person.since}
                        </List.Description>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    )
}
export default ConnectionList
