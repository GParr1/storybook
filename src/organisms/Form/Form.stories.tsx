import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputText } from '../../core/InputText'
import { InputSelect } from '../../core/InputSelect'
import { InputDate } from '../../core/InputDate'

import Form from './Form.tsx'

const countries = [
  {
    label: 'Italy',
    value: 'it'
  },
  {
    label: 'France',
    value: 'fr'
  },
  {
    label: 'Germany',
    value: 'de'
  },
  {
    label: 'Spain',
    value: 'es'
  }
]

const defaultFields = {
  name: {
    type: 'text' as const,
    required: true
  },

  email: {
    type: 'email' as const,
    required: true
  },

  country: {
    type: 'select' as const,
    required: true
  },

  birthDate: {
    type: 'date' as const,
    required: true
  },

  birthDateBox: {
    type: 'date' as const,
    required: true
  }
}

const meta = {
  title: 'Organisms/Form',
  component: Form,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    children: {
      table: {
        disable: true
      }
    },

    fields: {
      control: 'object',
      description: 'Validation configuration for form fields'
    },

    gap: {
      control: 'text'
    },

    loading: {
      control: 'boolean'
    },

    error: {
      control: 'text'
    }
  },

  args: {
    gap: '$4',

    fields: defaultFields
  }
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Default form
 */
export const Default: Story = {
  render: (args) => (
    <Form
      {...args}
      onSubmit={(values) => {
        console.log('SUBMIT:', values)
      }}
    >
      <InputText name="name" label="Name" placeholder="Enter your name" />

      <InputText
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <InputSelect
        name="country"
        label="Country"
        options={countries}
        placeholder="Select country..."
      />

      <InputDate name="birthDate" label="Birth date" />

      <InputDate name="birthDateBox" label="Birth date" mode="boxes" />
    </Form>
  )
}

/**
 * Empty form.
 *
 * Pressing submit should trigger
 * the required-field validations.
 */
export const Validation: Story = {
  args: {
    fields: defaultFields
  },

  render: (args) => (
    <Form
      {...args}
      onSubmit={(values) => {
        console.log('SUBMIT:', values)
      }}
    >
      <InputText name="name" label="Name" placeholder="Enter your name" />

      <InputText
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <InputSelect
        name="country"
        label="Country"
        options={countries}
        placeholder="Select country..."
      />

      <InputDate name="birthDate" label="Birth date" />

      <InputDate name="birthDateBox" label="Birth date" mode="boxes" />
    </Form>
  )
}

/**
 * Form with loading state.
 */
export const Loading: Story = {
  args: {
    loading: true,
    fields: defaultFields
  },

  render: (args) => (
    <Form
      {...args}
      onSubmit={(values) => {
        console.log('SUBMIT:', values)
      }}
    >
      <InputText name="name" label="Name" placeholder="Enter your name" />

      <InputText
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <InputSelect name="country" label="Country" options={countries} />

      <InputDate name="birthDate" label="Birth date" />

      <InputDate name="birthDateBox" label="Birth date" mode="boxes" />
    </Form>
  )
}

/**
 * Form with a global error.
 */
export const WithError: Story = {
  args: {
    error: 'Unable to submit the form. Please try again.',
    fields: defaultFields
  },

  render: (args) => (
    <Form
      {...args}
      onSubmit={(values) => {
        console.log('SUBMIT:', values)
      }}
    >
      <InputText name="name" label="Name" placeholder="Enter your name" />

      <InputText
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <InputSelect name="country" label="Country" options={countries} />

      <InputDate name="birthDate" label="Birth date" />

      <InputDate name="birthDateBox" label="Birth date" mode="boxes" />
    </Form>
  )
}

/**
 * Form with valid initial values.
 */
export const Filled: Story = {
  render: (args) => (
    <Form
      {...args}
      onSubmit={(values) => {
        console.log('SUBMIT:', values)
      }}
    >
      <InputText name="name" label="Name" value="Mario Rossi" />

      <InputText
        name="email"
        label="Email"
        value="mario@example.com"
        keyboardType="email-address"
      />

      <InputSelect
        name="country"
        label="Country"
        value="it"
        options={countries}
      />

      <InputDate name="birthDate" label="Birth date" value="1990-12-25" />

      <InputDate name="birthDateBox" label="Birth date" mode="boxes" />
    </Form>
  )
}
