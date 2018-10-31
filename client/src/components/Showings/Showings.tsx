import * as React from 'react'
import { Table } from 'antd'
import { ColumnProps } from 'antd/lib/table';


export default class extends React.Component {
    render = () => {
        // const columns : ColumnProps<any>[] = [{
        //     title: 'Address',
        //     dataIndex: 'address',
        //     sorter: (a, b) => a.name.length - b.name.length,
        // }, {
        //     title: 'Requested Time Period',
        //     dataIndex: 'requestedTimePeriod',
        //     defaultSortOrder: 'descend',
        //     sorter: (a, b) => a.requestedTimePeriod - b.requestedTimePeriod,
        // }, {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     filters: [{
        //         text: 'London',
        //         value: 'London',
        //     }, {
        //         text: 'New York',
        //         value: 'New York',
        //     }],
        //     filterMultiple: false,
        //     onFilter: (value, record) => record.address.indexOf(value) === 0,
        //     sorter: (a, b) => a.address.length - b.address.length,
        // }];

        // const dataSource = [{
        //     key: '1',
        //     name: 'John Brown',
        //     age: 32,
        //     address: 'New York No. 1 Lake Park',
        // }, {
        //     key: '2',
        //     name: 'Jim Green',
        //     age: 42,
        //     address: 'London No. 1 Lake Park',
        // }, {
        //     key: '3',
        //     name: 'Joe Black',
        //     age: 32,
        //     address: 'Sidney No. 1 Lake Park',
        // }, {
        //     key: '4',
        //     name: 'Jim Red',
        //     age: 32,
        //     address: 'London No. 2 Lake Park',
        // }];

        // function onChange(pagination, filters, sorter) {
        //     console.log('params', pagination, filters, sorter);
        // }
        // return (
        //     <Table dataSource={dataSource} columns={columns} />
        // )
        return <div>Hello</div>
    }
}