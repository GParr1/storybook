import type { InputProps } from 'tamagui'

export type InputDateMode = 'date' | 'boxes'

export interface InputDateProps extends InputProps {
  label?: string
  name?: string
  error?: string
  helperText?: string

  mode?: InputDateMode
}
