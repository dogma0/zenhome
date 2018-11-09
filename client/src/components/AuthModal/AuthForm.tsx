import * as React from 'react'
import { Redirect }  from 'react-router-dom'

import { Form, Modal, Tabs, Icon } from 'antd';
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

import {ErrorCard, LoadingStatus} from '../Misc'


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

        const handleIsLoginChange = () => {this.setState({ isLoginForm: !isLoginForm }) }

        return (
            <Modal
                visible={visible}
                title={titleText}
                okText={titleText}
                onCancel={onCancel}
                onOk={onAuth(authAbstracted)}
                confirmLoading={confirmLoading}
                destroyOnClose={true}
            >
                {this.state.isLoginForm ? 
                    <LoginForm form={form} handleIsLoginChange={handleIsLoginChange}/> :
                    <SignupForm form={form} handleIsLoginChange={handleIsLoginChange}/>
                }
                {(loginError) ?
                    // console.log(JSON.stringify(loginError)):
                    <div>
                        <Icon type="close-circle" theme="twoTone" />
                        <p>{loginError.message.split(':').slice(1).join()}</p>
                    </div> :
                    null
                }

                {(signupError) ?
                    (<ErrorCard
                    icon={<Icon type="frown" theme="twoTone" style={{ color: "#ff4d4fa" }} />}>
                        <p>We sincerely apologize, a technical issue happened</p>
                        <p>{JSON.stringify(signupError)}</p>
                    </ErrorCard>) :
                    null
                }
                {(loginLoading || signupLoading) ?
                    <LoadingStatus /> : null}
            </Modal>
        );
    }
}

export default Form.create()(AuthForm);