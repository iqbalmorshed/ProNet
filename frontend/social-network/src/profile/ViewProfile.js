import React, { useEffect } from 'react'
import ProfileCard from './ProfileCard'

import { useApi } from '../apiCommunication/useApi';
import { operations } from '../data/apiOperations';

function ViewProfile(props) {

    const { username } = props

    const [[isLoading, isSuccess, isError, resultData], setData] = useApi(
        operations.SHOW_PROFILE, {}
    )

    useEffect(() => {
        setData({
            urlVariables: [username],
        })
    }, [username , setData])

    if (isSuccess) {
        return <ProfileCard data={resultData} />
    }

    if (isError) {
        return <div>Error Loading Profile</div>
    }

    if (isLoading) {
        return <div>Profile is loading...</div>
    }

    return null
}

export default ViewProfile
