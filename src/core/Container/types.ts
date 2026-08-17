import {type YStackProps} from 'tamagui'

export type ContainerOrientation = 'row' | 'column'

export interface ContainerProps extends YStackProps {
    orientation?: ContainerOrientation
}

export const DEFAULT_CONTAINER_PROPS = {
    borderColor: '$secondaryColor',
    backgroundColor: '$background',
} satisfies Partial<ContainerProps>