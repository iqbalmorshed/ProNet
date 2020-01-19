import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

import { useApi } from '../apiCommunication/useApi'
import { statOperations } from '../data/apiOperations'

function SummaryStat() {

    const [[isSummaryStatLoading, isSummaryStatSuccess, isSummaryStatError, summaryStatData], setSummaryStatData]
        = useApi(statOperations.SHOW_SUMMARY_STATS, {})

    React.useEffect(() => {
        setSummaryStatData({
            urlVariables: [],
        })
    }, [])

    if (isSummaryStatError)
        return <div>Error loading summary stat</div>
    else if (isSummaryStatLoading)
        return <div> Loading summary stat data... </div>

    //console.log("summaryStatData :", summaryStatData)
    return (
        <Statistic.Group widths='two'>
            <Statistic>
                <Statistic.Value>
                    <i className="file alternate outline icon"></i>
                    22
                </Statistic.Value>
                <Statistic.Label>Posts</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value>
                    <i className="comments outline icon"></i>
                    22
                </Statistic.Value>
                <Statistic.Label>Comments</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value>
                    1
                </Statistic.Value>
                <Statistic.Label>Log In</Statistic.Label>
            </Statistic>

            <Statistic>
                <Statistic.Value>
                    42
            </Statistic.Value>
                <Statistic.Label>Total Time Spent</Statistic.Label>
            </Statistic>
        </Statistic.Group>
    )
}

export default SummaryStat
