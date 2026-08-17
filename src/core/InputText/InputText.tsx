import React from 'react'
import {
    Button,
    Input,
    Label,
    Paragraph,
    XStack,
    YStack,
} from 'tamagui'

import Icon from '../Icon'
import type { InputTextProps } from './types'

const InputText: React.FC<InputTextProps> = ({
                                                 label,
                                                 error,
                                                 helperText,
                                                 id,
                                                 password = false,
                                                 ...props
                                             }) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const inputId =
        id ??
        (label
            ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
            : undefined)

    const isPassword = password && !showPassword

    return (
        <YStack
            width="100%"
            gap="$2"
        >
            {label && (
                <Label
                    htmlFor={inputId}
                    color="$primaryText"
                    fontWeight="600"
                >
                    {label}
                </Label>
            )}

            <XStack
                width="100%"
                position="relative"
                alignItems="center"
            >
                <Input
                    {...props}
                    id={inputId}
                    type={isPassword ? 'password' : 'text'}
                    width="100%"
                    minHeight={44}
                    paddingHorizontal="$3"
                    paddingRight={password ? '$10' : '$3'}
                    borderWidth={1}
                    borderColor={
                        error
                            ? '$errorColor'
                            : '$secondaryColor'
                    }
                    backgroundColor="$background"
                    color="$color"
                    borderRadius="$3"
                    focusStyle={{
                        borderColor: '$primaryColor',
                        borderWidth: 2,
                    }}
                    hoverStyle={{
                        borderColor: '$primaryColor',
                    }}
                />

                {password && (
                    <Button
                        unstyled
                        position="absolute"
                        right="$3"
                        width={32}
                        height={32}
                        alignItems="center"
                        justifyContent="center"
                        accessibilityRole="button"
                        accessibilityLabel={
                            showPassword
                                ? 'Hide password'
                                : 'Show password'
                        }
                        onPress={() => {
                            setShowPassword((previous) => !previous)
                        }}
                        hoverStyle={{
                            opacity: 0.7,
                        }}
                        pressStyle={{
                            opacity: 0.5,
                        }}
                    >
                        <Icon
                            name={
                                showPassword
                                    ? 'visibility_off'
                                    : 'visibility'
                            }
                            size={20}
                        />
                    </Button>
                )}
            </XStack>

            {error ? (
                <Paragraph
                    size="$2"
                    color="$errorColor"
                >
                    {error}
                </Paragraph>
            ) : helperText ? (
                <Paragraph
                    size="$2"
                    color="$secondaryColor"
                >
                    {helperText}
                </Paragraph>
            ) : null}
        </YStack>
    )
}

export default InputText