import React, { memo, useEffect } from 'react'
import { Form, Input, Select  ,TimePicker } from 'antd'
import moment from 'moment';
import Modal from '../shared/Modal'

const { Option } = Select;

 const ENTER = 'Enter'
function AddEventModal({
  visible,
  form: { getFieldDecorator, setFieldsValue },
  title,
  handleCancel,
  handleOk,
  submitButtonTitle,
  eventValue
}) {
    const handleEnterKeyPress = e => {
        if (e.key === ENTER) {
            handleOk()
        }
      }
  return (
    <div className="extend-modal">
      <Modal
        visible={visible}
        title={title}
        handleCancel={handleCancel}
        handleOk={handleOk}
        submitButtonTitle={submitButtonTitle}
      >
          <Form
            layout="vertical"
            onKeyPress={e => {
              handleEnterKeyPress(e)
            }}
          >
            <Form.Item
              label= 'Event name'
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input   /> 
              )}
            </Form.Item> 
            <div className='select-date'>
            <Form.Item
              label= 'Start time'
            >
              {getFieldDecorator('startTime', {
                rules: [
                  {
                    required: true,
                  },
                ],
                initialValue : moment(  eventValue.start , 'HH:mm:ss')
              })(
                <TimePicker   size="large" />
              )}
            </Form.Item> 
            <Form.Item
              label= 'End time'
            >
              {getFieldDecorator('endTime', {
                rules: [
                  {
                    required: true,
                  },
                ],
                initialValue : moment(  eventValue.end , 'HH:mm:ss')
              })(
                <TimePicker    size="large" />
              )}
            </Form.Item> 
            <Form.Item
              label= 'Event type'
            >
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Select  style={{ width: 120 }} >
                <Option value="event">event</Option>
                <Option value="workshop">workshop</Option>
                <Option value="oneToOne">oneToOne</Option>
                <Option value="bootCamp">bootCamp</Option>
              </Select>
           
              )}
            </Form.Item> 
            </div>
          
          </Form>
      </Modal>
    </div>
  )
}

export default Form.create({ name: 'event modal' })(AddEventModal)

