import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container } from './Container'
import { Text } from '../Text'

const meta = {
    title: 'Core/Container',
    component: Container,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        orientation: {
            control: 'radio',
            options: ['column', 'row'],
            description: 'Controls the layout direction of the container',
        },

        width: {
            control: 'text',
        },

        height: {
            control: 'text',
        },

        padding: {
            control: 'text',
        },

        gap: {
            control: 'text',
        },

        backgroundColor: {
            control: 'text',
        },

        borderWidth: {
            control: 'number',
        },

        borderColor: {
            control: 'text',
        },

        borderRadius: {
            control: 'text',
        },

        alignItems: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'stretch',
            ],
        },

        justifyContent: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-between',
                'space-around',
                'space-evenly',
            ],
        },
    },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Container {...args}>
            <Text>
                Container
            </Text>
        </Container>
    ),
}

export const Row: Story = {
    args: {
        orientation: 'row',
        gap: '$3',
        padding: '$4',
        backgroundColor: '$secondaryBg',
    },

    render: (args) => (
        <Container {...args}>
            <Container
                width={80}
                height={80}
                backgroundColor="$buttonPrimaryBackground"
            />

            <Container
                width={80}
                height={80}
                backgroundColor="$buttonSecondaryBackground"
            />

            <Container
                width={80}
                height={80}
                backgroundColor="$primaryColor"
            />
        </Container>
    ),
}

export const Center: Story = {
    args: {
        width: 400,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$secondaryBg',
    },

    render: (args) => (
        <Container {...args}>
            <Text variant="title">
                Centered content
            </Text>
        </Container>
    ),
}

export const Responsive: Story = {
    args: {
        width: '100%',
        padding: '$3',
        backgroundColor: '$secondaryBg',

        $sm: {
            padding: '$4',
        },

        $md: {
            padding: '$6',
        },
    },

    render: (args) => (
        <Container {...args}>
            <Text>
                Responsive Container
            </Text>
        </Container>
    ),
}

export const Interactive: Story = {
    args: {
        padding: '$4',
        borderRadius: '$4',
        backgroundColor: '$background',
        borderWidth: 1,
        borderColor: '$primaryText',
        pressStyle: {
            backgroundColor: '$backgroundPress',
        },
        hoverStyle: {
            backgroundColor: '$backgroundHover',
        },
    },

    render: (args) => (
        <Container
            {...args}
            onPress={() => {
                console.log('Container pressed')
            }}
        >
            <Text>
                Press me
            </Text>
        </Container>
    ),
}