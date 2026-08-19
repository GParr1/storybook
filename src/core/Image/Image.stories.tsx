import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from './Image'
import { Assets } from '../../assets/assets'

const meta = {
  title: 'Core/Image',
  component: Image,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    src: {
      control: 'text'
    },

    width: {
      control: 'text'
    },

    height: {
      control: 'text'
    },

    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down']
    },

    borderRadius: {
      control: 'text'
    },

    opacity: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1
      }
    },

    accessibilityLabel: {
      control: 'text'
    }
  },

  args: {
    src: Assets.logo,
    width: 120,
    height: 120,
    objectFit: 'contain',
    accessibilityLabel: 'MiniLiga logo'
  }
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Contain: Story = {
  args: {
    width: 200,
    height: 120,
    objectFit: 'contain'
  }
}

export const Cover: Story = {
  args: {
    width: 200,
    height: 120,
    objectFit: 'cover'
  }
}

export const Rounded: Story = {
  args: {
    width: 120,
    height: 120,
    borderRadius: '$4',
    objectFit: 'cover'
  }
}

export const Small: Story = {
  args: {
    width: 60,
    height: 60,
    objectFit: 'contain'
  }
}

export const Large: Story = {
  args: {
    width: 300,
    height: 300,
    objectFit: 'contain'
  }
}

export const CustomOpacity: Story = {
  args: {
    width: 120,
    height: 120,
    opacity: 0.5
  }
}
