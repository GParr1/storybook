import React from 'react'
import { Button as TamaguiButton } from 'tamagui'
import { Icon } from '../Icon'
import { type ButtonProps } from './types'
import { buttonStyles } from './variants'
import { Container, type ContainerProps } from '../Container'
import { Text } from '../Text'
import { bottonVarians, FLEX_ALIGN, iconPosition } from '../layout'

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant = bottonVarians.Primary,
  iconProps,
  iconPositionProp = iconPosition.Left,
  disabled = false,
  textTransform,
  containerConfig,
  ...props
}: ButtonProps) => {
  const styles = buttonStyles(variant, disabled)

  const containerConfigDefault = {
    orientation: 'row',
    backgroundColor: 'none',
    gap: '$2',
    alignItems: FLEX_ALIGN.Center,
    ...containerConfig
  } as ContainerProps

  const textConfig = {
    children: label,
    color: disabled ? '$disabledColor' : iconProps?.color,
    textTransform,
    fontWeight: '700'
  }
  return (
    <TamaguiButton {...styles} {...props} role="button">
      {children ? (
        children
      ) : (
        <Container {...containerConfigDefault}>
          {iconProps && iconPositionProp === 'left' && <Icon {...iconProps} />}
          <Text {...textConfig} />
          {iconProps && iconPositionProp === 'right' && <Icon {...iconProps} />}
        </Container>
      )}
    </TamaguiButton>
  )
}

export default Button
