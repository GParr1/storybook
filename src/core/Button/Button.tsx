import React from 'react'
import {
    Button as TamaguiButton,
    XStack,
} from 'tamagui'

import Icon from '../Icon'
import type { ButtonProps } from './types'
import {
    buttonStyles,
    type ButtonVariant,
} from './variants'

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           variant = 'primary',
                                           icon,
                                           iconPosition = 'left',
                                           disabled = false,
                                           ...props
                                       }) => {
    const styles = buttonStyles[variant as ButtonVariant]

    const isPrimary =
        variant === 'primary' || variant === 'submit'

    const isTag = variant === 'tag'
    const isNone = variant === 'none'

    const textColor = isPrimary
        ? '$buttonPrimaryText'
        : variant === 'secondary'
            ? '$buttonSecondaryText'
            : '$buttonTagText'

    return (
        <TamaguiButton
            {...styles}
            {...props}
            disabled={disabled}
            paddingHorizontal="$4"
            paddingVertical="$3"
            minHeight={40}
            justifyContent="center"
            alignItems="center"
            borderRadius={
                isTag
                    ? 999
                    : isNone
                        ? 0
                        : 999
            }
            opacity={disabled ? 0.5 : 1}
            cursor={disabled ? 'not-allowed' : 'pointer'}
            hoverStyle={
                disabled
                    ? undefined
                    : {
                        opacity: 0.9,
                    }
            }
            pressStyle={
                disabled
                    ? undefined
                    : {
                        opacity: 0.8,
                    }
            }
            focusStyle={{
                outlineWidth: 2,
                outlineColor: '$primaryColor',
                outlineStyle: 'solid',
            }}
            aria-disabled={disabled}
            role="button"
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
                        color={textColor}
                    />
                )}

                <TamaguiButton.Text
                    color={disabled ? '$disabledColor' : textColor}
                    textTransform={
                        isNone
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
                        color={textColor}
                    />
                )}
            </XStack>
        </TamaguiButton>
    )
}

export default Button