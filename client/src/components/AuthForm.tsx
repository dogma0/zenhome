import * as React from 'react'
import { Form, Icon, Modal, Tabs, Card } from 'antd';
import LoadingStatus from './LoadingStatus'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

interface IAuthForm {
    visible: boolean,
    confirmLoading: boolean,
    onCancel: () => void,
    onAuth: any,
    loginMutation: any,
    signupMutation: any,
    form: any,
    loginData: any,
    loginError: any,
    loginLoading: any,
    signupData: any,
    signupError: any,
    signupLoading: any,
}
class AuthForm extends React.Component<IAuthForm> {
    state = { isLoginForm: true }
    render() {

        const { 
            visible,
            onCancel,
            onAuth,
            confirmLoading,
            loginMutation,
            form,
            signupMutation,
            loginData,
            loginError,
            loginLoading,
            signupData,
            signupError,
            signupLoading,
        } = this.props;

        const TabPane = Tabs.TabPane
        let { isLoginForm } = this.state
        const titleText: string = isLoginForm ? "Login" : "Signup"

        const authAbstracted = isLoginForm ? loginMutation : signupMutation

        return (
            <Modal
                visible={visible}
                title={titleText}
                okText={titleText}
                onCancel={onCancel}
                onOk={onAuth(authAbstracted)}
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
                    {(loginError || signupError) ?
                    (  <Card
                        title={<Icon type="frown" theme="twoTone" style={{color: "#ff4d4fa"}}/>}
                        style={{ width: 300 }}
                      >
                        <p>We sincerely apologize, a technical issue happened</p>
                        <p>{JSON.stringify(loginError)}</p>
                        <p>{JSON.stringify(signupError)}</p>
                      </Card>) :
                        null
                    } 
                    {(loginLoading || signupLoading) ?
                     <LoadingStatus/> : null}
            </Modal>
        );
    }
}

export default Form.create()(AuthForm);