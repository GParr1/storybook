import type { ComponentProps } from 'react'
import type { Button as TamaguiButton } from 'tamagui'

import type { IconName } from '../Icon'
import type { ButtonVariant } from './variants'

export type ButtonProps = {
    label: string
    variant?: ButtonVariant
    icon?: IconName
    iconPosition?: 'left' | 'right'
} & ComponentProps<typeof TamaguiButton>