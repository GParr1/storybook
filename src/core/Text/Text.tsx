import { styled, Text as TamaguiText } from 'tamagui'

export const Text = styled(TamaguiText, {
  name: 'Text',

  color: '$primaryText',
  fontSize: '$4',

  variants: {
    variant: {
      body: {
        fontSize: '$4',
        lineHeight: '$5'
      },

      small: {
        fontSize: '$2',
        lineHeight: '$3'
      },

      title: {
        fontSize: '$8',
        lineHeight: '$9',
        fontWeight: '700'
      },

      heading: {
        fontSize: '$10',
        lineHeight: '$11',
        fontWeight: '700'
      }
    },

    uppercase: {
      true: {
        textTransform: 'uppercase'
      }
    }
  } as const,

  defaultVariants: {
    variant: 'body'
  }
})
