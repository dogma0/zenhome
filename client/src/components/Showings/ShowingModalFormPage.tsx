import * as React from 'react'
import GenericModalFormPage from '../Misc/GenericModalFormPage'
import { Form, Input, Icon, List, DatePicker, Slider, Button } from 'antd'

const FormItem = Form.Item
class ShowingDetailForm extends React.Component<{
    form: any // Decorated by Form.create()
    defaultDate: string
    rangePickerTitle: string
    note: string
}>  {
    render = () => {
        {
            const { form } = this.props
            const { getFieldDecorator } = form

            const rangeConfig = {
                rules: [{ type: 'array', required: true, message: 'Please select time!' }],
            }
            const breakpt = 799
            
            return (
                <Form layout="vertical">
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
                                tipFormatter={(numFifteenMins: number) => (() => {
                                    const timeInReal = (numFifteenMins + 9 * 4) / 4
                                    const hr = Math.trunc(timeInReal)
                                    const m = (timeInReal - hr) === 0 ? "00" : `${(timeInReal - hr) * 60}`
                                    return `${hr}:` + m
                                })()}
                            />
                        )}
                    </FormItem>
                    <Button><Icon type="close" theme="outlined" />Cancel Appointment</Button>
                </Form>
            )
        }
    }
}

export default class
    extends React.Component<{ btnTitle: string }> {

    render = () => {
        return (
            <GenericModalFormPage
                btnTitle={this.props.btnTitle}
                onSubmit={(values) => { console.log(values) }}
                formComp={ShowingDetailForm}
                formProcessors={{
                    'date-picker': (fieldsValue) => fieldsValue['date-picker'].format('YYYY-MM-DD')
                }}
            >
                {ShowingDetailForm}
            </GenericModalFormPage>
        )
    }
}