import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from '../../../../src/organisms/Header/Header.tsx'
import {Assets} from "../../../../src/assets/assets";

const meta = {
  title: 'Organisms/Header',
  component: Header,

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    title: {
      control: 'text',
      description: 'Header title',
    },

    logoProps: {
      control: 'object',
      description: 'Header logo configuration',
    },

    navItems: {
      control: 'object',
      description: 'Navigation items',
    },

    actionItems: {
      control: 'object',
      description: 'Header action items',
    },
  },

  args: {
    title: 'My App',

    logoProps: {
      src: Assets.logo,
      width: 48,
      height: 48,
      objectFit: 'contain',
      'aria-label': 'MiniLiga',
    },

    navItems: [
      {
        label: 'Home',
        onPress: () => console.log('Home'),
      },
      {
        label: 'Teams',
        onPress: () => console.log('Teams'),
      },
      {
        label: 'Matches',
        onPress: () => console.log('Matches'),
      },
      {
        label: 'About',
        onPress: () => console.log('About'),
      },
    ],

    actionItems: [
      {
        name: 'account_circle',
        onPress: () => console.log('account_circle'),
      },
      {
        name: 'settings',
        onPress: () => console.log('settings'),
      },
      {
        name: 'login',
        onPress: () => console.log('login'),
        disabled: true,
      },
    ],
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

//export const Default: Story = {}

export const Default: Story = {}


export const WidthoutLogo: Story = {
  args: {
    title: 'My Application',
    logoProps: {
      src: ""
    }
  },
}

export const onlyLogo: Story = {
  args: {
    onlyLogo: true,
    title: '',
    navItems: [],
    actionItems: []
  },
}