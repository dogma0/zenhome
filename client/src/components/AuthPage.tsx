import * as React from 'react'
import { Button, Tabs } from 'antd';
import AuthForm from './AuthForm'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ButtonType } from 'antd/lib/button';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export default class AuthPage extends React.Component
    <{ toggleBtnType: ButtonType, toggleBtnText: String },
    { visible: Boolean, confirmLoading: Boolean }> {

    private formRef: any

    state = {
        visible: false, // visible is needed in AuthPage to open and close Modal
        confirmLoading: false,
    }

    showModal = () => { this.setState({ visible: true }) }

    handleCancel = () => { this.setState({ visible: false }) }

    handleSignin = (signin: any) => {
        return () => {
            const form = this.formRef.props.form;
            this.setState({
                confirmLoading: true,
            });
            form.validateFields((err: any, values: any) => {
                // Handle authentication here
                if (err) {
                    return;
                }
                console.log('Received values of form: ', values);
                signin(
                    {
                        variables: values,
                        update: (cache: any, { data }) => {
                            this.setState({ confirmLoading: false })
                            console.log("Received data:", data)
                        }
                    });
                form.resetFields();
                this.setState({ visible: false });
            });
        }
    }

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type={this.props.toggleBtnType} onClick={this.showModal}>{this.props.toggleBtnText}</Button>
                <Mutation
                    mutation={LOGIN_MUTATION}>
                    {(loginMutation, { data }) => (
                        <AuthForm
                            wrappedComponentRef={(formRef : any) => {
                                this.formRef = formRef;
                            }}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onAuth={this.handleSignin}
                            confirmLoading={this.state.confirmLoading}
                            mutation={loginMutation}
                        />)}
                </Mutation>
            </div>
        );
    }
}