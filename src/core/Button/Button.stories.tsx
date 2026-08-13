import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from './Button'
import { BUTTON_VARIANTS } from './variants'
import type { IconName } from '../Icon'

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
    'menu',
]

const meta = {
    title: 'Core/Button',
    component: Button,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        variant: {
            control: 'select',
            options: BUTTON_VARIANTS,
        },

        label: {
            control: 'text',
        },

        icon: {
            control: 'select',
            options: [undefined, ...icons],
        },

        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
        },

        disabled: {
            control: 'boolean',
        },

        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
        },
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Continue',
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Cancel',
        variant: 'secondary',
    },
}

export const Tag: Story = {
    args: {
        label: 'Category',
        variant: 'tag',
    },
}

export const None: Story = {
    args: {
        label: 'Action',
        variant: 'none',
    },
}

export const Submit: Story = {
    args: {
        label: 'Submit',
        variant: 'primary',
        type: 'submit',
    },
}

export const WithIcon: Story = {
    args: {
        label: 'Continue',
        variant: 'primary',
        icon: 'arrow_forward',
        iconPosition: 'right',
    },
}

export const WithLeftIcon: Story = {
    args: {
        label: 'Save',
        variant: 'primary',
        icon: 'save',
        iconPosition: 'left',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        variant: 'primary',
        disabled: true,
    },
}