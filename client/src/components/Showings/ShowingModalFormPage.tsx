import * as React from 'react'
import GenericModalFormPage from '../Misc/GenericModalFormPage'
import { Form, Input, Icon, List, DatePicker, Slider, Button } from 'antd'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const FormItem = Form.Item

const fifthteenMinChunkTimeConvert = (numFifteenMins: number) => (() => {
    const timeInReal = (numFifteenMins + 9 * 4) / 4
    const hr = Math.trunc(timeInReal)
    const m = (timeInReal - hr) === 0 ? "00" : `${(timeInReal - hr) * 60}`
    return `${hr}:` + m
})()

class ShowingDetailForm extends React.Component<{
    form: any // Decorated by Form.create()
    defaultDate: string
    rangePickerTitle: string
    note: string
    newForm?: boolean
}>  {
    render = () => {
        {
            const { form } = this.props
            const { getFieldDecorator } = form

            return (
                <Form layout="vertical" style={{ textAlign: "left" }}>
                    <FormItem label={this.props.rangePickerTitle}>
                        {getFieldDecorator('address', {
                            rules: [{ type: 'string', required: true, message: 'Please type in the address you\' like to book a showing for.' }],
                        })(
                            <Input placeholder="Please type in the address you' like to book a showing for." />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('phonenumber-input', {
                            rules: [{ type: 'string', required: true, message: "Please enter your phone number." }],
                        })(
                            <div>
                                <Input placeholder="Please enter your phone number." />
                            </div>
                        )}
                    </FormItem>
                    <FormItem label={this.props.rangePickerTitle}>
                        {getFieldDecorator('date-picker', {
                            rules: [{ type: 'object', required: true, message: 'Please select a showing date.' }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('time-range-slider', {
                            rules: [{ type: 'array', required: true, message: 'Please tell us what time works for you.' }],
                            initialValue: [32, 48]
                        })(
                            <Slider
                                range
                                min={0}
                                max={48} // 15 mins increment, 48 blocks of 15 mins from 9:00am to 9:00pm
                                marks={{ 0: "9:00am", 48: "9:00pm" }}
                                tipFormatter={fifthteenMinChunkTimeConvert}
                            />
                        )}
                    </FormItem>
                </Form>
            )
        }
    }
}

export default class
    extends React.Component<{ btnTitle: string }> {


    render = () => {
        const CREATE_SHOWING = gql`
            mutation CreateShowing($addr: String!, $datetime: String!, $phone: String!) {
                createShowing(addr: $addr, datetime: $datetime, phone: $phone) {
                    id
                }
            }
        `
        return (
            <Mutation mutation={CREATE_SHOWING}>
                {(createShowing, { data }) => {
                    return (
                        <GenericModalFormPage
                            btnTitle={this.props.btnTitle}
                            onSubmit={(values) => {
                                createShowing({
                                    variables: {
                                        addr: values['address'],
                                        phone: values['phonenumber-input'],
                                        datetime: JSON.stringify({ date: values['date-picker'], time: values['time-range-slider'].map((numFifthteen) => fifthteenMinChunkTimeConvert(numFifthteen)) }),
                                    }
                                })
                            }}
                            formComp={ShowingDetailForm}
                            formProcessors={{
                                'date-picker': (fieldsValue) => fieldsValue['date-picker'].format('YYYY-MM-DD')
                            }}
                        >
                            {ShowingDetailForm}
                        </GenericModalFormPage>
                    )
                }}
            </Mutation>
        )
    }
}