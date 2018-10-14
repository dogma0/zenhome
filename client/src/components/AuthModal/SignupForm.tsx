import * as React from 'react'
import { Form, Icon, Input } from 'antd';
import AuthInputForm, { getFormAndFieldDecor } from './AuthInputForm'

const FormItem = Form.Item;

export default (props) => {
    const { form, getFieldDecorator } = getFormAndFieldDecor(props)
    return (
        <div>
            <FormItem>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
                )}
            </FormItem>
            <AuthInputForm form={form} />
        </div>
    )
}