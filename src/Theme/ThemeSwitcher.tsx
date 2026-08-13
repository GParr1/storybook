import React from 'react'
import { Button, Text, YStack, useThemeSetting } from 'tamagui'

const ThemeSwitcher = () => {
    const { current, set } = useThemeSetting()

    const toggleTheme = () => {
        set(current === 'light' ? 'dark' : 'light')
    }

    return (
        <YStack gap="$3" alignItems="center">
            <Text>
                Tema: {current}
            </Text>

            <Button onPress={toggleTheme}>
                Cambia tema
            </Button>
        </YStack>
    )
}

export default ThemeSwitcher