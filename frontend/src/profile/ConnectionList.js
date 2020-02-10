import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ConnectionList(props) {
    return (
        <List>
            {props.children.map(person => {
                const connectedPerson = props.type === 'follower' ? person.follower : person.followee
                const connectedPersonProfile = '/profile/' + connectedPerson
                return (
                    <List.Item key={connectedPerson}>
                        {/* <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' /> */}
                        {/* <Label circular color='red'>2</Label> */}
                        <List.Content>
                            <Link to={connectedPersonProfile}>
                                <List.Header>

                                    {connectedPerson}

                                </List.Header>
                            </Link>
                            <List.Description>
                                since {person.since}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                )
            })}
        </List>
    )
}
export default ConnectionList
