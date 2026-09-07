import React from 'react'
import {Container} from "../Container";
import {Text} from "../Text";
import type {SeparatorProps} from "./types.ts";



const Separator = ({
                              label,
                              size=1,
                              orientation = 'horizontal',
                          }: SeparatorProps) => {
    if (orientation === 'vertical') {
        return (
            <Container
                orientation={'column'}
                width={size}
                height="100%"
                backgroundColor="$borderColor"
            />
        )
    }

    if (!label) {
        return (
            <Container
                orientation={'row'}
                width="100%"
                height={size}
                backgroundColor="$borderColor"
            />
        )
    }

    return (
        <Container
            orientation={'row'}
            width="100%"
            alignItems="center"
            gap="$3"
        >
            <Container
                orientation={'row'}
                flex={1}
                height={size}
                backgroundColor="$borderColor"
            />

            <Text
                color="$colorSecondary"
                fontSize="$3"
            >
                {label}
            </Text>

            <Container
                orientation={'row'}
                flex={1}
                height={size}
                backgroundColor="$borderColor"
            />
        </Container>
    )
}
export default Separator