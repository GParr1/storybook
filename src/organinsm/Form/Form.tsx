import React from 'react'
import { YStack } from 'tamagui'
import {FORM_DEFAULTS, type FormProps} from './types'

const Form: React.FC<FormProps> = ({
                                       children,
                                       ...props
                                   }) => {
    return (
        <YStack
            {...FORM_DEFAULTS}
            {...props}
        >
            {children}
        </YStack>
    )
}

export default Form