import * as React from 'react'
import { Icon, Card } from 'antd';
export default (props) => (
    <Card
        title={props.icon}
        style={{ width: 300 }}>
        {props.children}
    </Card>
)


