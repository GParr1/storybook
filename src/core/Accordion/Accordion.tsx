import React from 'react'
import {
    Button,
    Paragraph,
    Separator,
    XStack,
    YStack,
} from 'tamagui'

import Icon from '../Icon'
import type { AccordionProps } from './types'

const Accordion: React.FC<AccordionProps> = ({
                                                 title,
                                                 children,
                                                 defaultOpen = false,
                                                 disabled = false,
                                             }) => {
    const [open, setOpen] = React.useState(defaultOpen)

    const toggle = () => {
        if (!disabled) {
            setOpen((prev) => !prev)
        }
    }

    return (
        <YStack width="100%">
            <Button
                unstyled
                disabled={disabled}
                onPress={toggle}
                padding="$3"
                borderRadius="$4"
                backgroundColor="$background"
                hoverStyle={{
                    backgroundColor: '$backgroundHover',
                }}
                pressStyle={{
                    backgroundColor: '$backgroundPress',
                }}
                focusStyle={{
                    outlineWidth: 2,
                    outlineColor: '$color',
                }}
                cursor="pointer"
                width="100%"
            >
                <XStack
                    width="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="$2"
                >
                    <Paragraph
                        fontWeight="600"
                        color="$color"
                        flex={1}
                        textAlign="left"
                    >
                        {title}
                    </Paragraph>

                    <Icon
                        name={open ? 'expand_less' : 'expand_more'}
                        size={20}
                    />
                </XStack>
            </Button>

            <Separator />

            {open && (
                <YStack padding="$3">
                    {children}
                </YStack>
            )}
        </YStack>
    )
}

export default Accordion