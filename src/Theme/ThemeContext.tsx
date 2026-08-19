import React from 'react'

type ThemeName = 'light' | 'dark'

interface ThemeContextValue {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<ThemeName>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme
    }),
    [theme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useThemeSetting = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeSetting must be used inside ThemeProvider')
  }

  return context
}
// eslint-disable-next-line react-refresh/only-export-components
export default useThemeSetting
