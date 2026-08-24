import type { Meta, StoryObj } from '@storybook/react-vite'

import Header from '../../../../src/organisms/Header/Header.tsx'

const meta = {
  title: 'Organisms/Header',
  component: Header,

  parameters: {
    layout: 'fullscreen'
  },

  argTypes: {
    title: {
      control: 'text',
      description: 'Header title'
    },

    showLogin: {
      control: 'boolean',
      description: 'Show the login button'
    }
  },

  args: {
    title: 'My App',
    showLogin: true
  }
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

//export const Default: Story = {}

export const Default: Story = {
  args: {
    title: 'MiniLiga',
    showLogin: true,
    navItems: [
      {
        label: 'Home',
        onPress: () => console.log('Home')
      },
      {
        label: 'Teams',
        onPress: () => console.log('Teams')
      },
      {
        label: 'Matches',
        onPress: () => console.log('Matches')
      },
      {
        label: 'About',
        onPress: () => console.log('About')
      }
    ]
  }
}
export const WithoutLogin: Story = {
  args: {
    showLogin: false
  }
}

export const CustomTitle: Story = {
  args: {
    title: 'My Application'
  }
}
