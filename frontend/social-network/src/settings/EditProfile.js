import React, { useState, useEffect } from 'react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Message,
    TextArea,
} from 'semantic-ui-react'
import { useApi } from '../apiCommunication/useApi';
import { operations } from '../data/apiOperations';


function EditProfile(props) {
    console.log("username edit profile:", props.username)
    const [[isGetLoading, isGetSuccess, isGetError, resultGetData], setGetData] = useApi(operations.SHOW_PROFILE, {})
    const [[isPostLoading, isPostSuccess, isPostError, resultPostData], setPostData] = useApi(operations.EDIT_PROFILE, {})

    const [email, setEmail] = useState("")
    const [intro, setIntro] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    useEffect(() => {
        setGetData({
            urlVariables: [props.username,],
        })
    }, [props.username])
    const handleOnSubmit = e => {
        e.preventDefault()
        setPostData({
            urlVariables: [props.username,],
            payload: {
                email: email,
                basic_info: {
                    intro_quote: intro,
                },
                address: {
                    city: city,
                    country: country,
                }

            }
        })
    }

    useEffect(() => {
        if (isGetSuccess) {
            const data = resultGetData
            setEmail(data.email)
            setIntro(data.basic_info.intro_quote)
            setCity(data.address.city)
            setCountry(data.address.country)

        }
    }, [isGetSuccess, isGetLoading])



    return (
        <Grid item xs={12} md={8}>

            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='bar chart' />
                    Edit Profile Information
            </Header>
            </Divider>

            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    control={Input}
                    label='Email'
                    placeholder='Email'
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                />

                <Form.Field
                    control={TextArea}
                    label='Intro Quote'
                    placeholder='About me...'
                    value={intro}
                    onChange={e => { setIntro(e.target.value) }}
                />
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='City'
                        placeholder='City'
                        value={city}
                        onChange={e => { setCity(e.target.value) }}
                    />
                    <Form.Field
                        control={Input}
                        label='Country'
                        placeholder='Country'
                        value={country}
                        onChange={e => { setCountry(e.target.value) }}
                    />

                </Form.Group>

                {
                    isPostSuccess ?
                        <Message positive>
                            <Message.Header>You have successfully updated your profile</Message.Header>
                        </Message>
                        : null
                }
                {
                    isPostError ?
                        <Message negative>
                            <Message.Header>Error occured while updating profile</Message.Header>
                        </Message>
                        : null
                }

                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        </Grid>
    )
}

export default EditProfile
