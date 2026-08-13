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
        if (disabled) {
            return
        }

        setOpen((prev) => !prev)
    }

    return (
        <YStack width="100%">
            <Button
                unstyled
                disabled={disabled}
                onPress={toggle}
                padding="$3"
                borderRadius="$4"
                width="100%"
                backgroundColor="$background"
                hoverStyle={{
                    backgroundColor: '$backgroundHover',
                }}
                pressStyle={{
                    backgroundColor: '$backgroundPress',
                }}
                focusStyle={{
                    outlineWidth: 2,
                    outlineColor: '$primaryColor',
                    outlineStyle: 'solid',
                }}
                cursor={disabled ? 'not-allowed' : 'pointer'}
                opacity={disabled ? 0.5 : 1}
                aria-expanded={open}
                aria-disabled={disabled}
            >
                <XStack
                    width="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="$2"
                >
                    <Paragraph
                        flex={1}
                        fontWeight="600"
                        color="$primaryText"
                        textAlign="left"
                    >
                        {title}
                    </Paragraph>

                    <Icon
                        name={open ? 'expand_less' : 'expand_more'}
                        size={20}
                        color="$primaryText"
                    />
                </XStack>
            </Button>

            <Separator
                borderColor="$secondaryBg"
            />

            {open && (
                <YStack
                    padding="$3"
                    backgroundColor="$primaryBg"
                >
                    {children}
                </YStack>
            )}
        </YStack>
    )
}

export default Accordion