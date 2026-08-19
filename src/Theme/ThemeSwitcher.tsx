import { Button, Text, YStack } from 'tamagui'

import useThemeSetting from './ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeSetting()

  return (
    <YStack gap="$3" alignItems="center">
      <Text>Tema: {theme}</Text>

      <Button onPress={toggleTheme}>Cambia tema</Button>
    </YStack>
  )
}

export default ThemeSwitcher
