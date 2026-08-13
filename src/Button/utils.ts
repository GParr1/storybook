import { ButtonType } from './enum'

export const styleByType = (type: ButtonType) => {
  const defaultStyle = {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '$3',
    borderRadius: 999,
  }

  switch (type) {
    case ButtonType.PRIMARY:
      return {
        ...defaultStyle,
        width: '80%',
        backgroundColor: '$primaryBgBtn',
        borderColor: '$primaryColor',
        borderWidth: 1,
      }

    case ButtonType.SECONDARY:
      return {
        ...defaultStyle,
        width: '80%',
        backgroundColor: '$secondaryBgBtn',
        borderWidth: 0,
      }

    case ButtonType.TAG:
      return {
        ...defaultStyle,
        backgroundColor: 'transparent',
        borderColor: '$primaryText',
        borderWidth: 1,
        paddingHorizontal: '$3',
        paddingVertical: '$2',
      }

    case ButtonType.NONE:
      return {
        ...defaultStyle,
        position: 'absolute' as const,
        left: 0,
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderColor: '$primaryText',
        borderWidth: 1,
        zIndex: 1,
      }

    case ButtonType.SUBMIT:
      return {
        ...defaultStyle,
        width: '80%',
        backgroundColor: '$primaryBgBtn',
        borderColor: '$primaryColor',
        borderWidth: 1,
      }

    default:
      return defaultStyle
  }
}