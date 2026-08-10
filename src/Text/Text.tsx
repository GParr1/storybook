
import React from 'react'
import { Platform, Text } from 'react-native'
import type {NativeTextProps} from "./types.ts";


const NativeText: React.FC<NativeTextProps> = ({
  as = 'span',
  style,
  children,
  ...props
}) => {
  if (Platform.OS === 'web') {
    const Component = as

    return (
      <Component
        style={style}
        {...props}
      >
        {children}
      </Component>
    )
  }

  return (
    <Text
      style={style}
      {...props}
    >
      {children}
    </Text>
  )
}

export default NativeText
