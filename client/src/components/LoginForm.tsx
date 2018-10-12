import * as React from 'react'
import { Form } from 'antd';
import AuthInputForm, { getFormAndFieldDecor } from './AuthInputForm'

const FormItem = Form.Item;

export default (props) => {
    const { form } = getFormAndFieldDecor(props)
    return (
        <div>
            <AuthInputForm form={form} />
            <FormItem>
                <a className="login-form-forgot" href="">Forgot password</a>
            </FormItem>
        </div>
    )
}