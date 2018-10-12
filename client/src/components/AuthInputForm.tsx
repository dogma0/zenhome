import * as React from 'react'
import { Form, Icon, Input } from 'antd';

const FormItem = Form.Item;

export const getFormAndFieldDecor = (p) => ({ form: p.form, getFieldDecorator: p.form.getFieldDecorator })

export default (props) => {
    const { getFieldDecorator } = getFormAndFieldDecor(props)
    return (<Form className="signup-form">
        <FormItem>
            {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
            })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
        </FormItem>
        <FormItem>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
    </Form>)
}