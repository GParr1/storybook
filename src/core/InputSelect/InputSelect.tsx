import React from 'react'

import {
    Adapt,
    Label,
    Paragraph,
    Select,
    Sheet,
} from 'tamagui'

import {
    Check,
    ChevronDown,
    ChevronUp,
} from '@tamagui/lucide-icons'

import { Container } from '../Container'
import {
    useFormContext,
} from '../../organinsm/Form/FormContext'

import type {
    InputSelectProps,
} from './types'

const InputSelect: React.FC<
    InputSelectProps
> = ({
    label,
    options,
    error,
    helperText,
    id,
    name,
    disabled = false,
    placeholder = 'Select...',
    onValueChange,
    ...props
}) => {
    const form = useFormContext()

    /*
     * An explicit error passed to the component
     * has priority over the FormContext error.
     */
    const fieldError =
        error ??
        (name
            ? form?.errors[name]
            : undefined)

    const selectId =
        id ??
        (
            label
                ? `select-${label
    .toLowerCase()
    .replace(/\s+/g, '-')}`
                : undefined
        )

    const errorMessageId =
        fieldError
            ? `${selectId}-error`
            : undefined

    const helperMessageId =
        helperText
            ? `${selectId}-helper`
            : undefined

    const handleValueChange = (
        value: string,
    ) => {
        if (name) {
            form?.setValue(
                name,
                value,
            )
        }

        onValueChange?.(value)
    }

    return (
        <Container
            width="100%"
            gap="$2"
            opacity={
                disabled
                    ? 0.6
                    : 1
            }
        >
            {label && (
                <Label
                    htmlFor={selectId}
                    color="$primaryText"
                    fontWeight="600"
                >
                    {label}
                </Label>
            )}

            <Select
                {...props}
                id={selectId}
                onValueChange={
                    handleValueChange
                }
            >
                <Select.Trigger
                    width="100%"
                    minHeight={44}
                    paddingHorizontal="$3"
                    borderWidth={1}
                    borderColor={
                        fieldError
                            ? '$errorColor'
                            : '$secondaryColor'
                    }
                    backgroundColor="$background"
                    borderRadius="$3"
                    disabled={disabled}
                    disabledStyle={{
                        opacity: 0.6,
                    }}
                    hoverStyle={{
                        borderColor:
                            '$primaryColor',
                    }}
                    focusStyle={{
                        borderColor:
                            fieldError
                                ? '$errorColor'
                                : '$primaryColor',
                        borderWidth: 2,
                    }}
                    iconAfter={
                        ChevronDown
                    }
                    accessibilityRole="combobox"
                    accessibilityLabel={label}
                    accessibilityState={{
                        disabled,
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
                >
                    <Select.Value
                        placeholder={
                            placeholder
                        }
                    />
                </Select.Trigger>

                <Adapt
                    when="sm"
                    platform="touch"
                >
                    <Sheet
                        modal
                        dismissOnSnapToBottom
                    >
                        <Sheet.Frame>
                            <Sheet.ScrollView>
                                <Adapt.Contents />
                            </Sheet.ScrollView>
                        </Sheet.Frame>

                        <Sheet.Overlay />
                    </Sheet>
                </Adapt>

                <Select.Content>
                    <Select.ScrollUpButton>
                        <ChevronUp />
                    </Select.ScrollUpButton>

                    <Select.Viewport
                        minWidth={200}
                    >
                        <Select.Group>
                            {options.map(
                                (
                                    option,
                                    index,
                                ) => (
                                    <Select.Item
                                        key={
                                            option.value
                                        }
                                        value={
                                            option.value
                                        }
                                        index={
                                            index
                                        }
                                    >
                                        <Select.ItemText>
                                            {
                                                option.label
                                            }
                                        </Select.ItemText>

                                        <Select.ItemIndicator
                                            marginLeft="auto"
                                        >
                                            <Check />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                ),
                            )}
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton>
                        <ChevronDown />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select>

            {fieldError ? (
                <Paragraph
                    id={
                        errorMessageId
                    }
                    size="$2"
                    color="$errorColor"
                >
                    {fieldError}
                </Paragraph>
            ) : helperText ? (
                <Paragraph
                    id={
                        helperMessageId
                    }
                    size="$2"
                    color="$secondaryColor"
                >
                    {helperText}
                </Paragraph>
            ) : null}
        </Container>
    )
}

export default InputSelect
