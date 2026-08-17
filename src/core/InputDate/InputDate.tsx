import React from 'react'

import {
    Input,
    Label,
    Paragraph,
    YStack,
} from 'tamagui'

import type { InputDateProps } from './types'

const InputDate: React.FC<InputDateProps> = ({
                                                 label,
                                                 error,
                                                 helperText,
                                                 id,
                                                 ...props
                                             }) => {
    const inputId =
        id ??
        (
            label
                ? `date-${label
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`
                : undefined
        )

    const errorMessageId = error
        ? `${inputId}-error`
        : undefined

    const helperMessageId = helperText
        ? `${inputId}-helper`
        : undefined

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

            <Input
                {...props}
                id={inputId}
                type="date"
                width="100%"
                minHeight={44}
                paddingHorizontal="$3"
                borderWidth={1}
                borderColor={
                    error
                        ? '$errorColor'
                        : '$secondaryColor'
                }
                backgroundColor="$background"
                color="$color"
                borderRadius="$3"
                hoverStyle={{
                    borderColor: '$primaryColor',
                }}
                focusStyle={{
                    borderColor: '$primaryColor',
                    borderWidth: 2,
                }}
                aria-invalid={error ? true : undefined}
                aria-describedby={
                    errorMessageId ?? helperMessageId
                }
            />

            {error ? (
                <Paragraph
                    id={errorMessageId}
                    size="$2"
                    color="$errorColor"
                >
                    {error}
                </Paragraph>
            ) : helperText ? (
                <Paragraph
                    id={helperMessageId}
                    size="$2"
                    color="$secondaryColor"
                >
                    {helperText}
                </Paragraph>
            ) : null}
        </YStack>
    )
}

export default InputDate