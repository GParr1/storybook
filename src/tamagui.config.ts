import { createTamagui } from 'tamagui'
import { config } from '@tamagui/config'

const tamaguiConfig = createTamagui({
  ...config,

  themes: {
    ...config.themes,

    light: {
      ...config.themes.light,

      // ─────────────────────────────────────────
      // Background
      // ─────────────────────────────────────────

      background: 'rgb(250, 250, 250)',
      backgroundHover: 'rgb(240, 240, 240)',
      backgroundPress: 'rgb(230, 230, 230)',

      primaryBg: 'rgb(250, 250, 250)',
      secondaryBg: 'rgb(235, 235, 235)',

      // ─────────────────────────────────────────
      // Text
      // ─────────────────────────────────────────

      color: 'rgb(21, 22, 22)',
      colorHover: 'rgb(21, 22, 22)',
      colorPress: 'rgb(21, 22, 22)',

      primaryText: 'rgb(21, 22, 22)',

      // ─────────────────────────────────────────
      // Brand
      // ─────────────────────────────────────────

      primaryColor: 'rgb(7, 244, 104)',
      secondaryColor: 'rgb(75, 75, 75)',

      // ─────────────────────────────────────────
      // State
      // ─────────────────────────────────────────

      disabledColor: 'rgb(150, 150, 150)',

      // ─────────────────────────────────────────
      // Buttons
      // ─────────────────────────────────────────

      buttonPrimaryBackground: 'rgb(7, 244, 104)',
      buttonPrimaryText: 'rgb(21, 22, 22)',

      buttonSecondaryBackground: 'rgb(75, 75, 75)',
      buttonSecondaryText: 'rgb(250, 250, 250)',

      buttonTagBackground: 'transparent',
      buttonTagText: 'rgb(21, 22, 22)',
      buttonTagBorder: 'rgb(21, 22, 22)',

      buttonDisabledBackground: 'rgb(150, 150, 150)',
      buttonDisabledText: 'rgb(100, 100, 100)',
      errorColor: 'rgb(190, 30, 45)'
    },

    dark: {
      ...config.themes.dark,

      // ─────────────────────────────────────────
      // Background
      // ─────────────────────────────────────────

      background: 'rgb(21, 22, 22)',
      backgroundHover: 'rgb(35, 36, 36)',
      backgroundPress: 'rgb(45, 45, 45)',

      primaryBg: 'rgb(21, 22, 22)',
      secondaryBg: 'rgb(50, 50, 50)',

      // ─────────────────────────────────────────
      // Text
      // ─────────────────────────────────────────

      color: 'rgb(250, 250, 250)',
      colorHover: 'rgb(250, 250, 250)',
      colorPress: 'rgb(250, 250, 250)',

      primaryText: 'rgb(250, 250, 250)',

      // ─────────────────────────────────────────
      // Brand
      // ─────────────────────────────────────────

      primaryColor: 'rgb(7, 244, 104)',
      secondaryColor: 'rgb(75, 75, 75)',

      // ─────────────────────────────────────────
      // State
      // ─────────────────────────────────────────

      disabledColor: 'rgb(90, 90, 90)',

      // ─────────────────────────────────────────
      // Buttons
      // ─────────────────────────────────────────

      buttonPrimaryBackground: 'rgb(7, 244, 104)',
      buttonPrimaryText: 'rgb(21, 22, 22)',

      buttonSecondaryBackground: 'rgb(50, 50, 50)',
      buttonSecondaryText: 'rgb(250, 250, 250)',

      buttonTagBackground: 'transparent',
      buttonTagText: 'rgb(250, 250, 250)',
      buttonTagBorder: 'rgb(250, 250, 250)',

      buttonDisabledBackground: 'rgb(90, 90, 90)',
      buttonDisabledText: 'rgb(180, 180, 180)',
      errorColor: 'rgb(255, 90, 100)'
    }
  }
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}
