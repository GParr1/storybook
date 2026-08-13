import type { GetProps } from 'tamagui'
import { Button as TamaguiButton } from 'tamagui'

import type { IconName } from '../Icon'
import type { ButtonVariant } from './variants'

type TamaguiButtonProps = GetProps<typeof TamaguiButton>

export type ButtonProps = Omit<
    TamaguiButtonProps,
    'children' | 'variant' | 'icon'
> & {
    label: string
    variant?: ButtonVariant
    icon?: IconName
    iconPosition?: 'left' | 'right'
}