import * as React from 'react'
import { Form, Icon, Input, Modal, Tabs } from 'antd';

const FormItem = Form.Item;

const getFormAndFieldDecor = (p) => ({ form: p.form, getFieldDecorator: p.form.getFieldDecorator})

const AuthInputForm = (props) => {
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

const SignupForm = (props) => {
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

const LoginForm = (props) => {
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

interface IAuthForm {
    visible: boolean,
    confirmLoading: boolean,
    onCancel: () => void,
    onAuth: any,
    mutation: any,
    form: any
}
class AuthForm extends React.Component<IAuthForm> {
    state = { isLoginForm: true }
    render() {
        const { visible, onCancel, onAuth, confirmLoading, mutation, form } = this.props;
        const TabPane = Tabs.TabPane
        let { isLoginForm } = this.state
        const titleText: string = isLoginForm ? "Login" : "Signup"
        console.log(typeof(form))
        return (
            <Modal
                visible={visible}
                title={titleText}
                okText={titleText}
                onCancel={onCancel}
                onOk={onAuth(mutation)}
                confirmLoading={confirmLoading}
            >
                <Tabs
                    defaultActiveKey="1"
                    onChange={() => { this.setState({ isLoginForm: !isLoginForm }) }}>
                    <TabPane tab="Login" key="1">
                        <LoginForm form={form} />
                    </TabPane>
                    <TabPane tab="Signup" key="2">
                        <SignupForm form={form} />
                    </TabPane>
                </Tabs>
            </Modal>
        );
    }
}

export default Form.create()(AuthForm);