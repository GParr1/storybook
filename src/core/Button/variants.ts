import { BUTTON_STYLE } from '../../styles/buttonStyles'
import type { ButtonVariant } from '../layout'

export const buttonStyles = (
    variant: ButtonVariant,
    disabled: boolean
):Record< string, unknown> => {
  return {
    ...BUTTON_STYLE[variant],
    ...(disabled && {
      disabled: true,
      'aria-disabled': true,
      opacity: 0.5,
      cursor: 'not-allowed',
      hoverStyle: undefined,
      pressStyle: undefined,
    }),
  }
}