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
        padding: {
            control: 'text',
        },

        backgroundColor: {
            control: 'text',
        },

        width: {
            control: 'text',
        },

        height: {
            control: 'text',
        },

        flexDirection: {
            control: 'select',
            options: [
                'row',
                'column',
                'row-reverse',
                'column-reverse',
            ],
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
    args: {
        padding: '$4',
        backgroundColor: '$secondaryBg',
    },

    render: (args) => (
        <Container {...args}>
            <Text>
                Container
            </Text>
        </Container>
    ),
}

export const Row: Story = {
    render: () => (
        <Container
            flexDirection="row"
            gap="$3"
            padding="$4"
            backgroundColor="$secondaryBg"
        >
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
    render: () => (
        <Container
            width={400}
            height={250}
            alignItems="center"
            justifyContent="center"
            backgroundColor="$secondaryBg"
        >
            <Text variant="title">
                Centered content
            </Text>
        </Container>
    ),
}
export const Responsive: Story = {
    render: () => (
        <Container
            width="100%"
            padding="$3"
            backgroundColor="$secondaryBg"

            $sm={{
                padding: '$4',
            }}

            $md={{
                padding: '$6',
            }}
        >
            <Text>
                Responsive Container
            </Text>
        </Container>
    ),
}
export const Interactive: Story = {
    render: () => (
        <Container
            padding="$4"
            borderRadius="$4"
            backgroundColor="$background"
            borderWidth={1}
            borderColor="$primaryText"
            pressStyle={{
                backgroundColor: '$backgroundPress',
            }}
            hoverStyle={{
                backgroundColor: '$backgroundHover',
            }}
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