import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../../../../src/core/Button/Button'
import type { IconName } from '../../../../src/core/Icon'
import { bottonVarians, iconPosition } from '../../../../src/core/layout'

const icons: IconName[] = [
  'add',
  'remove',
  'check',
  'close',
  'arrow_back',
  'arrow_forward',
  'expand_less',
  'expand_more',
  'search',
  'edit',
  'delete',
  'save',
  'settings',
  'menu'
]

const meta = {
  title: 'Core/Button',
  component: Button,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(bottonVarians)
    },

    label: {
      control: 'text'
    },

    icon: {
      control: 'select',
      options: [undefined, ...icons]
    },

    iconPositionProp: {
      control: 'select',
      options: Object.values(bottonVarians)
    },

    disabled: {
      control: 'boolean'
    },

    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Continue',
    variant: bottonVarians.Primary
  }
}

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    variant: bottonVarians.Secondary
  }
}

export const Tag: Story = {
  args: {
    label: 'Category',
    variant: bottonVarians.Tag
  }
}

export const None: Story = {
  args: {
    label: 'Action',
    variant: bottonVarians.None
  }
}

export const Submit: Story = {
  args: {
    label: 'Submit',
    variant: bottonVarians.Submit,
    type: 'submit'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Continue',
    variant: bottonVarians.Primary,
    iconProps: { name: 'arrow_forward', size: 18 },
    iconPositionProp: iconPosition.Right
  }
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Save',
    variant: bottonVarians.Primary,
    iconProps: { name: 'save', size: 18 },
    iconPositionProp: iconPosition.Left
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: bottonVarians.Primary,
    disabled: true
  }
}
