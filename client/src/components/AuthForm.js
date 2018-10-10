import React from 'react'
import { Form, Icon, Input, Modal } from 'antd';

const FormItem = Form.Item;

export default Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onAuth, confirmLoading, mutation, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Signin"
                    okText="Signin"
                    onCancel={onCancel}
                    onOk={onAuth(mutation)}
                    confirmLoading={confirmLoading}
                >
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userEmail', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <a className="login-form-forgot" href="">Forgot password</a>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);