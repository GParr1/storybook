import type { SelectProps } from 'tamagui'

export interface InputSelectOption {
  label: string
  value: string
}

export interface InputSelectProps extends SelectProps {
  label?: string
  name?: string
  disabled?: boolean
  options: InputSelectOption[]
  error?: string
  helperText?: string
  placeholder?: string
}
