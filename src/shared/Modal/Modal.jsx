/**
 *
 * Modal
 *
 */

import React from 'react'
import { Modal as ModalAntd, Button, Icon } from 'antd'
import './modal.scss'

function Modal({
  title,
  footer,
  visible,
  handleOk,
  handleCancel,
  loading,
  submitButtonTitle,
  children,
  ...props
}) {
  return (
    <ModalAntd
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        footer || [
          <Button key="1" className="btn cancel-btn" onClick={handleCancel}>
           Cancel
          </Button>,
          <Button
            key="2"
            className="btn submit-btn"
            loading={loading}
            onClick={handleOk}
          >
            {submitButtonTitle}
          </Button>,
        ]
      }
      closeIcon={[
        <div key="3" className="icon-container">
          <Icon type="close" className="icon-container-close" />
        </div>,
      ]}
      {...props}
    >
      {children}
    </ModalAntd>
  )
}


Modal.defaultProps = {
  submitButtonTitle: 'Submit',
  loading: false,
}

export default Modal
