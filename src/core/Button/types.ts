import type { ButtonProps as TamaguiButtonProps } from 'tamagui'
import type { IconProps } from '../Icon'
import type React from 'react'
import type { ButtonVariant, IconPosition } from '../layout'
import type { ContainerProps } from '../Container'

export type ButtonProps = Omit<TamaguiButtonProps, 'variant'> & {
  label?: string
  variant?: ButtonVariant
  iconProps?: IconProps
  iconPositionProp?: IconPosition
  containerConfig?: ContainerProps
  textTransform?:
    'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'unset' | undefined
  children?: React.ReactNode
}
