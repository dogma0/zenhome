import React from 'react'
import { Button } from 'antd';
import AuthForm from './AuthForm'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
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

export default class AuthPage extends React.Component {
    state = {
        visible: false, // visible is needed in AuthPage to open and close Modal
        confirmLoading: false,
    }

    showModal = () => { this.setState({ visible: true }) }

    handleCancel = () => { this.setState({ visible: false }) }

    handleSignin = (signin) => {
        return () => {
            const form = this.formRef.props.form;
            this.setState({
                confirmLoading: true,
            });
            form.validateFields((err, values) => {
                // Handle authentication here
                let {userEmail, password} = values
                signin({variables: 
                    {email: userEmail,
                    password: password}});
                setTimeout(() => this.setState({
                    confirmLoading: false
                }), 2000)
                if (err) {
                    return;
                }
                console.log('Received values of form: ', values);
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
                {(loginMutation, { data }) => (<AuthForm
                    wrappedComponentRef={(formRef) => {
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