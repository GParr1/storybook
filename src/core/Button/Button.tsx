import React from 'react'
import { Button as TamaguiButton, XStack } from 'tamagui'

import Icon from '../Icon'
import type { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           variant = 'primary',
                                           icon,
                                           iconPosition = 'left',
                                           ...props
                                       }) => {
    const isTag = variant === 'tag'
    const isNone = variant === 'none'

    return (
        <TamaguiButton
            {...props}
            borderRadius={isTag ? 999 : isNone ? 0 : 999}
            paddingHorizontal="$4"
            paddingVertical="$3"
            minHeight={40}
            justifyContent="center"
            alignItems="center"
            borderWidth={
                isTag || variant === 'primary' ? 1 : 0
            }
            backgroundColor={
                isNone
                    ? 'transparent'
                    : variant === 'secondary'
                        ? '$background'
                        : variant === 'tag'
                            ? 'transparent'
                            : '$color'
            }
        >
            <XStack
                alignItems="center"
                justifyContent="center"
                gap="$2"
            >
                {icon && iconPosition === 'left' && (
                    <Icon
                        name={icon}
                        size={18}
                    />
                )}

                <TamaguiButton.Text
                    textTransform={
                        variant === 'none'
                            ? 'none'
                            : 'uppercase'
                    }
                    fontWeight="700"
                >
                    {label}
                </TamaguiButton.Text>

                {icon && iconPosition === 'right' && (
                    <Icon
                        name={icon}
                        size={18}
                    />
                )}
            </XStack>
        </TamaguiButton>
    )
}

export default Button