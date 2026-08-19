import React from 'react'
import { Button as TamaguiButton } from 'tamagui'

import { Icon } from '../Icon'
import type { ButtonProps } from './types'
import { buttonStyles, type ButtonVariant } from './variants'
import { Container, type ContainerProps } from '../Container'
import { Text } from '../Text'

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant = 'primary',
  iconProps,
  iconPosition = 'left',
  disabled = false,
  textTransform,
  ...props
}: ButtonProps) => {
  const styles = buttonStyles[variant as ButtonVariant]
  const stylesDisabled = disabled
    ? {
        disabled: disabled,
        'aria-disabled': disabled,
        opacity: 0.5,
        cursor: 'not-allowed',
        hoverStyle: undefined,
        pressStyle: undefined
      }
    : {}

  const containerConfig = {
    orientation: 'row',
    backgroundColor: 'none',
    alignItems: 'center'
  } as ContainerProps

  const textConfig = {
    children: label,
    color: disabled ? '$disabledColor' : iconProps?.color,
    textTransform,
    fontWeight: '700'
  }
  return (
    <TamaguiButton {...styles} {...props} {...stylesDisabled} role="button">
      {children ? (
        children
      ) : (
        <Container {...containerConfig}>
          {iconProps && iconPosition === 'left' && <Icon {...iconProps} />}
          <Text {...textConfig} />
          {iconProps && iconPosition === 'right' && <Icon {...iconProps} />}
        </Container>
      )}
    </TamaguiButton>
  )
}

export default Button
