import type { ButtonProps as TamaguiButtonProps } from 'tamagui'
import type { ButtonVariant } from './variants'

export type ButtonProps = Omit<
    TamaguiButtonProps,
    'variant'
> & {
    label: string
    variant?: ButtonVariant
    icon?: string
    iconPosition?: 'left' | 'right'
}