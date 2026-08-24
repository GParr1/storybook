import type { Preview } from '@storybook/react-vite'
import TamaguiProvider from '../src/TamaguiProvider'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          {
            value: 'light',
            title: 'Light',
          },
          {
            value: 'dark',
            title: 'Dark',
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => (
        <TamaguiProvider theme={context.globals.theme}>
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