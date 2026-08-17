
import React from 'react'

import {
    Button,
    Input,
    Label,
    Paragraph,
} from 'tamagui'

import Icon from '../Icon'
import { Container } from '../Container'

import {
    useFormContext,
} from '../../organinsm/Form/FormContext'

import type {
    InputTextProps,
} from './types'

const InputText: React.FC<InputTextProps> = ({
    label,
    error,
    helperText,
    id,
    name,
    password = false,
    onChangeText,
    ...props
}) => {
    const [showPassword, setShowPassword] =
        React.useState(false)

    const form = useFormContext()

    /*
     * An explicit error passed to the component
     * has priority over the error coming from
     * the FormContext.
     */
    const fieldError =
        error ??
        (name
            ? form?.errors[name]
            : undefined)

    const inputId =
        id ??
        (
            label
                ? `input-${label
    .toLowerCase()
    .replace(/\s+/g, '-')}`
                : undefined
        )

    const errorMessageId =
        fieldError
            ? `${inputId}-error`
            : undefined

    const helperMessageId =
        helperText
            ? `${inputId}-helper`
            : undefined

    const isPassword =
        password && !showPassword

    const handleChange = (
        value: string,
    ) => {
        /*
         * Update FormContext.
         */
        if (name) {
            form?.setValue(
                name,
                value,
            )
        }

        /*
         * Preserve the component
         * onChangeText callback.
         */
        onChangeText?.(value)
    }

    return (
        <Container
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

            <Container
                orientation="row"
                width="100%"
                position="relative"
                alignItems="center"
            >
                <Input
                    {...props}
                    id={inputId}
                    type={
                        isPassword
                            ? 'password'
                            : 'text'
                    }
                    width="100%"
                    minHeight={44}
                    paddingHorizontal="$3"
                    paddingRight={
                        password
                            ? '$10'
                            : '$3'
                    }
                    borderWidth={1}
                    borderColor={
                        fieldError
                            ? '$errorColor'
                            : '$secondaryColor'
                    }
                    backgroundColor="$background"
                    color="$color"
                    borderRadius="$3"
                    focusStyle={{
                        borderColor:
                            '$primaryColor',
                        borderWidth: 2,
                    }}
                    hoverStyle={{
                        borderColor:
                            '$primaryColor',
                    }}
                    aria-invalid={
                        fieldError
                            ? true
                            : undefined
                    }
                    aria-describedby={
                        errorMessageId ??
                        helperMessageId
                    }
                    onChangeText={
                        handleChange
                    }
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
                            setShowPassword(
                                (previous) =>
                                    !previous,
                            )
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
            </Container>

            {fieldError ? (
                <Paragraph
                    id={errorMessageId}
                    size="$2"
                    color="$errorColor"
                >
                    {fieldError}
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
        </Container>
    )
}

export default InputText
