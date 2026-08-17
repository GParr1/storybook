import React from 'react'

import {
    Paragraph,
    Spinner,
} from 'tamagui'

import { Container } from '../../core/Container'
import Button from '../../core/Button'

import {
    FormContext,
} from './FormContext'

import {
    FORM_DEFAULTS, type FormErrors,
    type FormProps,
} from './types'

import {
    validateForm,
} from './utils'

const Form: React.FC<FormProps> = ({
                                       children,
                                       loading = false,
                                       error,
                                       fields = {},
                                       onSubmit,
                                       ...props
                                   }) => {
    const [values, setValues] = React.useState<
        Record<string, string>
    >({})

    const [errors, setErrors] =
        React.useState<FormErrors>({})

    const setValue = React.useCallback(
        (
            name: string,
            value: string,
        ) => {
            setValues((current) => ({
                ...current,
                [name]: value,
            }))

            // Rimuove l'errore del campo
            // quando l'utente lo modifica.
            setErrors((current) => {
                if (!current[name]) {
                    return current
                }

                const next = {
                    ...current,
                }

                delete next[name]

                return next
            })
        },
        [],
    )

    const handleSubmit = React.useCallback(() => {
        const validationErrors =
            validateForm(
                values,
                fields,
            )

        setErrors(validationErrors)

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            return
        }

        onSubmit?.(values)
    }, [
        values,
        fields,
        onSubmit,
    ])

    const contextValue =
        React.useMemo(
            () => ({
                values,
                errors,
                setValue,
            }),
            [
                values,
                errors,
                setValue,
            ],
        )

    return (
        <FormContext.Provider
            value={contextValue}
        >
            <Container
                {...FORM_DEFAULTS}
                {...props}
                opacity={
                    loading
                        ? 0.7
                        : 1
                }
            >
                {error && (
                    <Paragraph
                        color="$errorColor"
                        role="alert"
                    >
                        {error}
                    </Paragraph>
                )}

                {children}

                <Button
                    label="Submit"
                    variant="primary"
                    disabled={loading}
                    onPress={handleSubmit}
                />

                {loading && (
                    <Container
                        alignItems="center"
                        justifyContent="center"
                        padding="$3"
                    >
                        <Spinner
                            size="small"
                        />
                    </Container>
                )}
            </Container>
        </FormContext.Provider>
    )
}

export default Form