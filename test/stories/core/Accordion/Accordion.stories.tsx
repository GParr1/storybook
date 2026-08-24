import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paragraph, YStack } from 'tamagui'
import Accordion from '../../../../src/core/Accordion/Accordion'

const meta = {
  title: 'Core/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    width: {
      control: 'text'
    },
    defaultOpen: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'What is Storybook?',
    width: '80vw',
    defaultOpen: false,
    children: (
      <Paragraph>
        Storybook is a tool for developing UI components in isolation.
      </Paragraph>
    )
  }
}

export const Open: Story = {
  args: {
    title: 'This accordion starts open',
    defaultOpen: true,
    children: (
      <Paragraph>This content is visible when the story loads.</Paragraph>
    )
  }
}

export const Disabled: Story = {
  args: {
    title: 'Disabled accordion',
    disabled: true,
    children: <Paragraph>This content cannot be opened.</Paragraph>
  }
}

export const LongContent: Story = {
  args: {
    title: 'Long content',
    children: (
      <YStack gap="$3">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>

        <Paragraph>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>

        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Paragraph>
      </YStack>
    )
  }
}
