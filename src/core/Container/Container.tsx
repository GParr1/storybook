import { XStack, YStack } from 'tamagui'

import {type ContainerProps, DEFAULT_CONTAINER_PROPS} from './types'

export const Container = ({
                              orientation = 'column',
                              ...props
                          }: ContainerProps) => {

    const Stack = orientation === 'row'
        ? XStack
        : YStack

    return <Stack
        {...DEFAULT_CONTAINER_PROPS}
        {...props}
    />
}