import React from 'react'
import {
    TamaguiProvider as Provider,
    type TamaguiProviderProps,
} from 'tamagui'

import config from './tamagui.config'

type Theme = 'light' | 'dark'

type Props = Omit<TamaguiProviderProps, 'config'> & {
    theme?: Theme
}

const TamaguiProvider: React.FC<Props> = ({
                                              children,
                                              theme = 'light',
                                              ...props
                                          }) => {
    return (
        <Provider
            config={config}
            defaultTheme={theme}
            {...props}
        >
            {children}
        </Provider>
    )
}

export default TamaguiProvider