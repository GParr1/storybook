import React from 'react'
import {
  TamaguiProvider as Provider,
  type TamaguiProviderProps,
} from 'tamagui'

import config from './tamagui.config'

const TamaguiProvider: React.FC<
  Omit<TamaguiProviderProps, 'config'>
> = ({ children, ...props }) => {
  return (
    <Provider
      config={config}
      defaultTheme="light"
      {...props}
    >
      {children}
    </Provider>
  )
}

export default TamaguiProvider
