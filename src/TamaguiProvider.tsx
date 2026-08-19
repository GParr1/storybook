import React from 'react'

import {
  TamaguiProvider as Provider,
  Theme as TamaguiTheme,
  type TamaguiProviderProps
} from 'tamagui'

import config from './tamagui.config'

type ThemeName = 'light' | 'dark'

export interface DesignSystemProviderProps extends Omit<
  TamaguiProviderProps,
  'config'
> {
  theme?: ThemeName
}

const TamaguiProvider: React.FC<DesignSystemProviderProps> = ({
  children,
  theme = 'light',
  ...props
}) => {
  return (
    <Provider config={config} {...props}>
      <TamaguiTheme name={theme}>{children}</TamaguiTheme>
    </Provider>
  )
}

export default TamaguiProvider
