export const BUTTON_VARIANTS = [
    'primary',
    'secondary',
    'tag',
    'none',
    'submit',
] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

export const buttonStyles = {
    primary: {
        backgroundColor: '$buttonPrimaryBackground',
        borderColor: '$primaryColor',
        borderWidth: 1,
    },

    secondary: {
        backgroundColor: '$buttonSecondaryBackground',
        borderColor: '$buttonSecondaryBackground',
        borderWidth: 1,
    },

    tag: {
        backgroundColor: '$buttonTagBackground',
        borderColor: '$buttonTagBorder',
        borderWidth: 1,
        borderRadius: 999,
    },

    none: {
        backgroundColor: 'transparent',
        borderColor: '$primaryText',
        borderWidth: 1,
        borderRadius: 0,
    },

    submit: {
        backgroundColor: '$buttonPrimaryBackground',
        borderColor: '$primaryColor',
        borderWidth: 1,
    },
} as const