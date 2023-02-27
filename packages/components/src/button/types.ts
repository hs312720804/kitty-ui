import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini']

export const buttonProps = {
  type: {
    type: String,
    value: ButtonType
  },
  size: {
    type: String,
    value: ButtonSize
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
}


export type ButtonProps = ExtractPropTypes<typeof buttonProps>
