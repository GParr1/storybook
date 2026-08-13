import '../src/styles/material-symbols.css'
import type { Preview } from '@storybook/react-vite'
import TamaguiProvider from '../src/TamaguiProvider'

const preview: Preview = {
  decorators: [
    (Story) => (
        <TamaguiProvider>
          <Story />
        </TamaguiProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
}

export default preview