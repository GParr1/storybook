import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta = {
  title: 'Core/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'small', 'title', 'heading']
    },

    uppercase: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Lorem Ipsum is simply dummy text',
    variant: 'body'
  }
}

export const Heading: Story = {
  args: {
    children: 'Lorem Ipsum',
    variant: 'heading'
  }
}

export const Title: Story = {
  args: {
    children: 'Lorem Ipsum',
    variant: 'title'
  }
}

export const Small: Story = {
  args: {
    children: 'Lorem Ipsum',
    variant: 'small'
  }
}
