import * as React from 'react'
import { Table, Card, List, Icon, Button, Modal } from 'antd'
import { ColumnProps } from 'antd/lib/table';
import { string } from 'prop-types';
import { IconComponent } from 'antd/lib/icon';
import styled from 'styled-components'
import ShowingModalFormPage from './ShowingModalFormPage'
import { url } from 'inspector';


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
                <ShowingModalFormPage btnTitle="Book a Showing"/>
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
                    <Icon
                        type={statusDisplayMap[showingStatus].type}
                        theme='twoTone' />
                    <span>
                        {statusDisplayMap[showingStatus].msg}
                    </span>
                    <ShowingModalFormPage btnTitle="Edit" />
                </div>
            )
        }

        const StyledFormatedDescription = styled(FormatedDescription)`
            font-size: 36px;
        `
        return <StyledFormatedDescription showingStatus={this.props.showingStatus} />
    }
}

const ShowingTitle = ({ addr, url, date }) => (
    <div>
        <span>Showing Appointment for </span>
        <a href="https://realtor.ca">
            {addr}
        </a>
        <span> on {date}</span>
    </div>
)

class ShowingList extends React.Component {
    render = () => {
        const data = [
            {
                addr: '123 Yonge st',
                status: 'IN_DRAFT',
                date: '18-09-21'
            },
            {
                addr: '123 Yonge st',
                status: 'VIEWER_ATTENDED',
                date: '18-09-21'
            },
            {
                addr: '123 Yonge st',
                status: 'PENDING_SELLER_CONFIRMATION',
                date: '18-09-21'
            },
        ];

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<ShowingTitle
                                addr={item.addr}
                                url="realtor.ca"
                                date="18-09-21" />}
                            description={<ShowingDescription showingStatus={item.status} />}
                        />
                    </List.Item>
                )}
            />
        )
    }
}
export default class extends React.Component {
    render = () => {
        return (
            <div>
                <NewShowing />
                <ShowingList />
            </div>
        )
    }
}