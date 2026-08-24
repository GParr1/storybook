import type { Meta, StoryObj } from '@storybook/react-vite'
import Icon from '../../../../src/core/Icon/Icon'
import { ICONS } from '../../../../src/core/Icon/icons'
import type { IconName } from '../../../../src/core/Icon/types'
import React from 'react'

const icons = Object.keys(ICONS) as IconName[]

const meta = {
  title: 'Core/Icon',
  component: Icon,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    name: {
      control: 'select',
      options: icons
    },

    size: {
      control: {
        type: 'number',
        min: 8,
        max: 96,
        step: 1
      }
    },

    color: {
      control: 'color'
    },

    strokeWidth: {
      control: {
        type: 'number',
        min: 0.5,
        max: 4,
        step: 0.5
      }
    },

    accessibilityLabel: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'arrow_forward',
    size: 24
  }
}

export const Login: Story = {
  args: {
    name: 'login',
    size: 24
  }
}

export const Settings: Story = {
  args: {
    name: 'settings',
    size: 24
  }
}

export const Gallery: { render: () => React.JSX.Element } = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '1000px'
      }}
    >
      {icons.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '16px 8px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            minHeight: '90px'
          }}
        >
          <Icon name={name} size={28} />

          <span
            style={{
              fontSize: '11px',
              textAlign: 'center',
              wordBreak: 'break-word'
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}
