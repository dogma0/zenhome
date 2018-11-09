import * as React from 'react'
import { Table, Card, List, Icon, Button, Modal } from 'antd'
import { ColumnProps } from 'antd/lib/table';
import { string } from 'prop-types';
import { IconComponent } from 'antd/lib/icon';
import styled from 'styled-components'
import ShowingModalFormPage from './ShowingModalFormPage'
import { url } from 'inspector';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

class NewShowing extends React.Component {
    render = () => {
        const sofa = require('../../../assets/sofa.jpg')
        const Bg = styled.div`
            background: url(${sofa}) no-repeat center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover
            height: 850px;
            text-align: center;
            line-height: 850px;
            white-space: no-wrap;
        `
        return (
            <Bg>
                <ShowingModalFormPage btnTitle="Book a Showing" />
            </Bg>
        )
    }
}
class ShowingDescription extends React.Component
    <{ showingStatus: string }, {}> {
    render = () => {
        const FormatedDescription = ({ showingStatus }) => {

            const statusDisplayMap = {
                IN_DRAFT: {
                    type: "pause-circle",
                    msg: "Let's submit your showing appointment now"
                },
                PENDING_SELLER_CONFIRMATION: {
                    type: "clock-circle",
                    msg: "Waiting for seller's confirming, will email you a confirmation as soon as it's confirmed"
                },
                CONFIMED_BY_SELLER: {
                    type: "check-circle",
                    msg: ""
                },
                REJECTED_BY_SELLER: {
                    type: "stop",
                    msg: ""
                },
                CANCELED: {
                    type: "form",
                    msg: ""
                },
                VIEWER_ATTENDED: {
                    type: "check-circle",
                    msg: ""
                },
            }

            return (
                <div>
                    <div style={{ padding: "20px 0px 20px 0px" }}>
                        <Icon
                            type={statusDisplayMap[showingStatus].type}
                            theme='twoTone' />
                        <span>
                            {statusDisplayMap[showingStatus].msg}
                        </span>
                    </div>
                </div>
            )
        }

        const StyledFormatedDescription = styled(FormatedDescription)`
            font-size: 36px;
        `
        return <StyledFormatedDescription showingStatus={this.props.showingStatus} />
    }
}

const ShowingTitle = ({ addr, url, datetime }) => (
    <div>
        <span>Showing Appointment for </span>
        <a href="https://realtor.ca">
            {addr}
        </a>
        <span> on {datetime}</span>
    </div>
)

class ShowingList extends React.Component {
    render = () => {
        const USER_SHOWINGS = gql`
            {
                me {
                    showings {
                        id
                        address
                        phoneNumber
                        datetime
                        status
                    }
                }        
            } 
            `

        console.log('Rendered ShowingList')
        return (
            <Query query={USER_SHOWINGS}>
                {
                    ({ loading, error, data }) => {
                        return (
                            <List
                                itemLayout="horizontal"
                                dataSource={!(data.me) ? [] : data.me.showings}
                                renderItem={item => { 
                                    console.log(`datetime: ${item.datetime}`)
                                    const datetime = JSON.parse(item.datetime)
                                    return (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<ShowingTitle
                                                addr={item.address}
                                                url="realtor.ca"
                                                datetime={`${datetime.date} from ${datetime.time[0]} to ${datetime.time[1]}`} />}
                                            description={<ShowingDescription showingStatus={item.status} />}
                                            style={{ padding: "0px 0px 90px 0px" }}
                                        />
                                    </List.Item>
                                    )
                                }}
                            />
                        )
                    }
                }
            </Query>
        )
    }
}
export default class extends React.Component {
    render = () => {
        console.log("Rendered Showings")
        return (
            <div>
                <NewShowing />
                <ShowingList />
            </div>
        )
    }
}