import { styled, Text as TamaguiText } from 'tamagui'

export const Text = styled(TamaguiText, {
  name: 'Text',

  color: '$color',
  fontSize: '$4',

  variants: {
    variant: {
      body: {
        fontSize: '$4',
      },

      small: {
        fontSize: '$2',
      },

      title: {
        fontSize: '$8',
        fontWeight: '700',
      },

      heading: {
        fontSize: '$10',
        fontWeight: '700',
      },
    },

    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'body',
  },
})
