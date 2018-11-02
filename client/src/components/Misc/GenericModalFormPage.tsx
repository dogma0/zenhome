import * as React from 'react'
import { Button, Modal, Form } from 'antd';

interface IGenericModal {
    visible: boolean,
    onSubmit: () => void,
    onCancel: () => void,
}

class GenericModal extends React.Component<IGenericModal> {
    render() {

        const {
            visible,
            onCancel,
            onSubmit,
        } = this.props;

        return (
            <Modal
                visible={visible}
                okText="Submit"
                cancelText="Back"
                onCancel={onCancel}
                onOk={onSubmit}
            >
                {this.props.children}
            </Modal>
        );
    }
}

class GenericModalFormPage extends React.Component
    <{
        btnTitle: string
        formComp: any
        formProcessors?: any
        onSubmit: (values: {}) => void
    }> {

    state = {
        visible: false,
    };

    formRef

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleSubmit = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, fieldsValue) => {
            // if (err) {
            //     return;
            // }

            // Process form fields value
            console.log("fieldsvalues: ")
            console.log(fieldsValue)
            const ps = this.props.formProcessors
            const values = {
                ...fieldsValue,
                ...Object.assign({}, ...Object.keys(ps).map(k => ({[k]: ps[k](fieldsValue)})))
            }
            console.log('Received values of form: ', values);
            this.props.onSubmit(values)
            form.resetFields();
            this.setState({ visible: false });
        });
    }


    render = () => {
        const FormFactory = Form.create()(
           this.props.formComp
        )
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>{this.props.btnTitle}</Button>
                <GenericModal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                >
                    <FormFactory wrappedComponentRef={(ref) => {this.formRef = ref}}/>
                </GenericModal>
            </div>
        );
    }
}
export default GenericModalFormPage