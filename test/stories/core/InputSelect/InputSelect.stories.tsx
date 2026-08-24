import type { Meta, StoryObj } from '@storybook/react-vite'
import InputSelect from '../../../../src/core/InputSelect/InputSelect'

const options = [
  { label: 'Italy', value: 'it' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'Spain', value: 'es' }
]

const meta = {
  title: 'Core/InputSelect',
  component: InputSelect,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the select'
    },

    options: {
      control: 'object',
      description: 'Available select options'
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the select'
    },

    error: {
      control: 'text',
      description: 'Validation error message'
    },

    helperText: {
      control: 'text',
      description: 'Additional information displayed below the select'
    },

    value: {
      control: 'select',
      options: [undefined, 'it', 'fr', 'de', 'es']
    },

    placeholder: {
      control: 'text'
    }
  },

  args: {
    options,
    label: 'Country',
    placeholder: 'Select country...'
  }
} satisfies Meta<typeof InputSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: 'it'
  }
}

export const HelperText: Story = {
  args: {
    helperText: 'Select the country where you live.'
  }
}

export const Error: Story = {
  args: {
    error: 'Please select a country.'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const ManyOptions: Story = {
  args: {
    options: [
      ...options,
      { label: 'Portugal', value: 'pt' },
      { label: 'Netherlands', value: 'nl' },
      { label: 'Belgium', value: 'be' },
      { label: 'Austria', value: 'at' },
      { label: 'Switzerland', value: 'ch' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'Japan', value: 'jp' }
    ]
  }
}
