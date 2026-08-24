import { BUTTON_STYLE } from '../../styles/buttonStyles'
import type { ButtonVariant } from '../layout'

export const buttonStyles = (variant: ButtonVariant, disabled: boolean) => {
  return {
    ...BUTTON_STYLE[variant],
    ...(disabled && {
      disabled: disabled,
      'aria-disabled': disabled,
      opacity: 0.5,
      cursor: 'not-allowed',
      hoverStyle: undefined,
      pressStyle: undefined
    })
  }
}
