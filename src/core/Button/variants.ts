export const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'tag',
  'none',
  'submit'
] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]
const commonStyle = {
  cursor: 'pointer',
  paddingHorizontal: '$4',
  paddingVertical: '$3',
  hoverStyle: {
    backgroundColor: '$buttonPrimaryBackgroundHover',
    opacity: 0.9
  },
  pressStyle: {
    opacity: 0.8
  },
  focusStyle: {
    outlineWidth: 2,
    outlineColor: '$primaryColor',
    outlineStyle: 'solid'
  }
}
export const buttonStyles = {
  primary: {
    ...commonStyle,
    backgroundColor: '$buttonPrimaryBackground',
    borderColor: '$primaryColor',
    color: '$buttonPrimaryText',
    borderRadius: '$20',
    borderWidth: 1
  },

  secondary: {
    ...commonStyle,
    backgroundColor: '$buttonSecondaryBackground',
    borderColor: '$buttonSecondaryBackground',
    color: '$buttonSecondaryText',
    borderRadius: '$20',
    borderWidth: 1
  },

  tag: {
    ...commonStyle,
    backgroundColor: '$buttonTagBackground',
    borderColor: '$buttonTagBorder',
    color: '$buttonTagText',
    borderRadius: '$0',
    borderWidth: 1
  },

  none: {
    ...commonStyle,
    backgroundColor: 'transparent',
    borderColor: '$primaryText',
    borderWidth: 0,
    borderRadius: 0
  },

  submit: {
    ...commonStyle,
    backgroundColor: '$buttonPrimaryBackground',
    borderColor: '$primaryColor',
    borderRadius: '$20',
    color: '$buttonPrimaryText',
    borderWidth: 1
  }
} as const
