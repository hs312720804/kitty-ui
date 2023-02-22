import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini']

export const ButtonProps = {
  type: {
    type: String,
    value: ButtonType
  },
  size: {
    type: String,
    value: ButtonSize
  }
}


export type ButtonProps = ExtractPropTypes<typeof ButtonProps>
