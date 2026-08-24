const BUTTON_STYLE_DEFAULT = {
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
export const BUTTON_STYLE = {
  primary: {
    ...BUTTON_STYLE_DEFAULT,
    backgroundColor: '$buttonPrimaryBackground',
    borderColor: '$primaryColor',
    color: '$buttonPrimaryText',
    borderRadius: '$20',
    borderWidth: 1
  },

  secondary: {
    ...BUTTON_STYLE_DEFAULT,
    backgroundColor: '$buttonSecondaryBackground',
    borderColor: '$buttonSecondaryBackground',
    color: '$buttonSecondaryText',
    borderRadius: '$20',
    borderWidth: 1
  },

  tag: {
    ...BUTTON_STYLE_DEFAULT,
    backgroundColor: '$buttonTagBackground',
    borderColor: '$buttonTagBorder',
    color: '$buttonTagText',
    borderRadius: '$0',
    borderWidth: 1
  },

  none: {
    ...BUTTON_STYLE_DEFAULT,
    backgroundColor: 'transparent',
    borderColor: '$primaryText',
    borderWidth: 0,
    borderRadius: 0
  },

  submit: {
    ...BUTTON_STYLE_DEFAULT,
    backgroundColor: '$buttonPrimaryBackground',
    borderColor: '$primaryColor',
    borderRadius: '$20',
    color: '$buttonPrimaryText',
    borderWidth: 1
  }
}
