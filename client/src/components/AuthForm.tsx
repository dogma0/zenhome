import * as React from 'react'
import { Form, Icon, Input, Modal, Tabs } from 'antd';

const AuthInputForm = (props: any) => {
    const FormItem = Form.Item;
    const { isLogin, form } = props;
    const { getFieldDecorator } = form;
    return <Form className="signup-form">
        {isLogin && <FormItem>
            {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your name!' }],
            })(
                <Input prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
            )}
        </FormItem>}
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
        {isLogin && <FormItem>
            <a className="login-form-forgot" href="">Forgot password</a>
        </FormItem>}
    </Form>
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
    render() {
        const { visible, onCancel, onAuth, confirmLoading, mutation, form } = this.props;
        const TabPane = Tabs.TabPane
        return (
            <Modal
                visible={visible}
                title="Signin"
                okText="Signin"
                onCancel={onCancel}
                onOk={onAuth(mutation)}
                confirmLoading={confirmLoading}
            >
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Login" key="1">
                        <AuthInputForm
                            isLogin={true}
                            form={form}
                        />
                    </TabPane>
                    <TabPane tab="Signup" key="2">
                        <AuthInputForm
                            isLogin={false}
                            form={form}
                        />
                    </TabPane>
                </Tabs>
            </Modal>
        );
    }
}
export default Form.create()(AuthForm);