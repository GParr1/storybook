import type { ButtonProps as TamaguiButtonProps } from 'tamagui'
import type { ButtonVariant } from './variants'
import type { IconProps } from '../Icon'

export type ButtonProps = Omit<TamaguiButtonProps, 'variant'> & {
  label?: string
  variant?: ButtonVariant
  iconProps?: IconProps
  iconPosition?: 'left' | 'right'
}
