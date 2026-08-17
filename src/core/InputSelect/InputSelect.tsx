import React from 'react'

import {
    Adapt,
    Label,
    Paragraph,
    Select,
    Sheet,
    YStack,
} from 'tamagui'

import {
    Check,
    ChevronDown,
    ChevronUp,
} from '@tamagui/lucide-icons'

import type { InputSelectProps } from './types'

const InputSelect: React.FC<InputSelectProps> = ({
                                                     label,
                                                     options,
                                                     error,
                                                     helperText,
                                                     id,
                                                     disabled = false,
                                                     placeholder = 'Select...',
                                                     ...props
                                                 }) => {
    const selectId =
        id ??
        (label
            ? `select-${label
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            : undefined)

    const errorMessageId = error
        ? `${selectId}-error`
        : undefined

    const helperMessageId = helperText
        ? `${selectId}-helper`
        : undefined

    return (
        <YStack
            width="100%"
            gap="$2"
            opacity={disabled ? 0.6 : 1}
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
            >
                <Select.Trigger
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
                    borderRadius="$3"
                    disabled={disabled}
                    disabledStyle={{
                        opacity: 0.6,
                    }}
                    hoverStyle={{
                        borderColor: '$primaryColor',
                    }}
                    focusStyle={{
                        borderColor: '$primaryColor',
                        borderWidth: 2,
                    }}
                    iconAfter={ChevronDown}
                    accessibilityRole="combobox"
                    accessibilityLabel={label}
                    accessibilityState={{
                        disabled,
                    }}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={
                        errorMessageId ?? helperMessageId
                    }
                >
                    <Select.Value
                        placeholder={placeholder}
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

                    <Select.Viewport minWidth={200}>
                        <Select.Group>
                            {options.map((option, index) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    index={index}
                                >
                                    <Select.ItemText>
                                        {option.label}
                                    </Select.ItemText>

                                    <Select.ItemIndicator marginLeft="auto">
                                        <Check />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton>
                        <ChevronDown />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select>

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

export default InputSelect