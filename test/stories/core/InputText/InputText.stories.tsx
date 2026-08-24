import type { Meta, StoryObj } from '@storybook/react-vite'

import InputText from '../../../../src/core/InputText/InputText'

const meta = {
  title: 'Core/InputText',
  component: InputText,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    label: {
      control: 'text'
    },

    name: {
      control: 'text'
    },

    placeholder: {
      control: 'text'
    },

    value: {
      control: 'text'
    },

    disabled: {
      control: 'boolean'
    },

    error: {
      control: 'text'
    },

    helperText: {
      control: 'text'
    },

    password: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof InputText>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name'
  }
}

export const WithValue: Story = {
  args: {
    name: 'email',
    label: 'Email',
    value: 'john@example.com'
  }
}

export const Error: Story = {
  args: {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address'
  }
}

export const Helper: Story = {
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    helperText: 'Minimum 8 characters'
  }
}

export const Password: Story = {
  args: {
    name: 'password',
    label: 'Password',
    password: true,
    placeholder: 'Enter password'
  }
}

export const PasswordError: Story = {
  args: {
    name: 'password',
    label: 'Password',
    password: true,
    placeholder: 'Enter password',
    error: 'Password is required'
  }
}

export const Disabled: Story = {
  args: {
    name: 'username',
    label: 'Username',
    value: 'john',
    disabled: true
  }
}
