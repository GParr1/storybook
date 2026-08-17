import type { Meta, StoryObj } from '@storybook/react-vite'

import InputDate from './InputDate'

const meta = {
    title: 'Core/InputDate',
    component: InputDate,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        label: {
            control: 'text',
        },

        value: {
            control: 'text',
        },

        error: {
            control: 'text',
        },

        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof InputDate>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Date',
    },
}

export const WithValue: Story = {
    args: {
        label: 'Date',
        value: '2026-08-13',
    },
}

export const Error: Story = {
    args: {
        label: 'Date',
        error: 'Please select a valid date',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Date',
        value: '2026-08-13',
        disabled: true,
    },
}