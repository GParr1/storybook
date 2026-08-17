import type { InputProps } from 'tamagui'

export interface InputTextProps extends InputProps {
    label?: string
    error?: string
    helperText?: string
    password?: boolean
}