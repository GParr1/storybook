import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputText } from '../../core/InputText'
import Button from '../../core/Button'
import Form from './Form'

const meta = {
    title: 'Organisms/Form',
    component: Form,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },

        gap: {
            control: 'text',
        },
    },

    args: {
        gap: '$4',
    },
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Form {...args}>
            <InputText
                label="Name"
                placeholder="Enter your name"
            />

            <InputText
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Button
                label="Submit"
                variant="primary"
            />
        </Form>
    ),
}