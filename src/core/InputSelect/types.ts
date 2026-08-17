import type { SelectProps } from 'tamagui'

export interface SelectOption {
    label: string
    value: string
}

export interface InputSelectProps extends SelectProps {
    label?: string
    options: SelectOption[]
    error?: string
    helperText?: string
    disabled?: boolean
    placeholder?: string
}