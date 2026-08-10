import React from 'react'
import {
  type StyleProp,
  TouchableOpacity,
  type ViewStyle,
} from 'react-native'

import NativeText from '../Text'
import Icon from '../core/Icon'

import type {ButtonProps} from './types'
import { styleByType } from './utils'

const Button: React.FC<ButtonProps> = ({
  touchableOpacityConfig,
  label,
  icon,
}) => {
  const {
    type,
    style,
    ...touchableProps
  } = touchableOpacityConfig

  const buttonStyle: StyleProp<ViewStyle> = [
    styleByType(type),
    style,
  ]

  return (
    <TouchableOpacity
      role="button"
      {...touchableProps}
      style={buttonStyle}
    >
      {icon && (
        <Icon
          name={icon}
          size={18}
        />
      )}

      <NativeText as="span">
        {label}
      </NativeText>
    </TouchableOpacity>
  )
}

export default Button
