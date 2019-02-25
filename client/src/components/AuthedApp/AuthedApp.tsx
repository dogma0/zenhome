import * as React from 'react'
import { Button, Icon, Menu, Row, Col, Dropdown } from 'antd'
import MediaQuery from 'react-responsive'
import { ColumnProps } from 'antd/lib/table';
import Showings from '../Showings'
import Offers from '../Offers'
import LegalConsultations from '../LegalConsultations'

export default class extends React.Component<{}, { selectedMenu: string }> {
    constructor(props) {
        super(props)
        this.state = { selectedMenu: '1' }
    }
    render = () => {
        const ResponsiveNav = () => {

            const breakpt = 800 
            const menu = (mode) => (
                <Menu
                    mode={mode}
                    defaultSelectedKeys={[this.state.selectedMenu]}
                    style={{ textAlign: 'center', lineHeight: '64px' }}
                    onClick={({ key }) => { this.setState({ selectedMenu: key }) }}
                >
                    <Menu.Item key="1">Showing</Menu.Item>
                    <Menu.Item key="2">Offer</Menu.Item>
                    {/* <Menu.Item key="3">Legal Consultation</Menu.Item> */}
                    <Menu.Item disabled={true} key="_">Search Homes (Coming Soon)</Menu.Item>
                    <Menu.Item key="3"><Button onClick={(e) => {localStorage.removeItem('token');location.reload()}}>Logout<Icon type="logout"></Icon></Button></Menu.Item>
                </Menu>
            )
            return (
                <div>
                    {/* Note: A menu item is rendered in either branch. 
                    Moreover, in DropDown, a menu is being rendered on hover and click and being re-rendered again once an event has taken place
                    My guess is once a menu is being re-rendered and before AutheApp's selectedMenu gets changed, menu's onSelect gets called again leaving selectedMenu constant*/}
                    <MediaQuery minWidth={breakpt}>
                        {menu("horizontal")}
                    </MediaQuery>
                    <MediaQuery
                        maxWidth={breakpt}>
                        <div style={{
                            textAlign: "right",
                        }}>
                            <Dropdown trigger={["click","hover"]} overlay={menu("vertical")}>
                                <Icon type="bars" style={{ fontSize: 32, margin: "32px 32px 32px 32px" }} />
                            </Dropdown>
                        </div>
                    </MediaQuery>
                </div>
            )
        }
        console.log("Rendered AuthedApp")
        return (
            <div>
                <Row id='nav'>
                    <Col>
                        <ResponsiveNav />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ padding: '0 50px' }}>
                            {(this.state.selectedMenu === '1') ?
                                <Showings />
                                : <Offers />
                                    // : <LegalConsultations />
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center', background: 'inherit' }}>
                            ZenHome
                </div>
                    </Col>
                </Row>
            </div>
        )
    }
}