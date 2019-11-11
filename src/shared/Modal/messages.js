/*
 * Modal Messages
 *
 * This contains all the text for the Modal component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.Modal'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Modal component!',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
  edit: {
    id: `${scope}.edit`,
    defaultMessage: 'Edit',
  },
})
