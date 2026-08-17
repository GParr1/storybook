import type { Meta, StoryObj } from '@storybook/react-vite'
import Icon from './Icon'
import type { IconName } from './types'
import React from "react";

const icons: IconName[] = [
    // Navigation
    'arrow_back',
    'arrow_forward',
    'arrow_upward',
    'arrow_downward',
    'arrow_back_ios',
    'arrow_forward_ios',
    'chevron_left',
    'chevron_right',
    'expand_less',
    'expand_more',
    'first_page',
    'last_page',
    'home',
    'menu',
    'close',

    // Actions
    'add',
    'remove',
    'check',
    'done',
    'edit',
    'delete',
    'save',
    'cancel',
    'refresh',
    'search',
    'filter_list',
    'sort',
    'more_vert',
    'more_horiz',
    'settings',
    'build',

    // Communication
    'mail',
    'email',
    'send',
    'chat',
    'forum',
    'comment',
    'notifications',
    'notifications_none',
    'phone',
    'call',
    'contacts',
    'person',
    'group',
    'groups',

    // Media
    'play_arrow',
    'pause',
    'stop',
    'skip_next',
    'skip_previous',
    'fast_forward',
    'fast_rewind',
    'volume_up',
    'volume_down',
    'volume_off',
    'mic',
    'mic_off',
    'image',
    'photo',
    'movie',
    'music_note',
    'camera_alt',
    'videocam',

    // Files
    'folder',
    'folder_open',
    'file_copy',
    'description',
    'attachment',
    'upload_file',
    'download',
    'cloud',
    'cloud_upload',
    'cloud_download',
    'picture_as_pdf',

    // Shopping
    'shopping_cart',
    'shopping_bag',
    'store',
    'local_shipping',
    'credit_card',
    'payments',
    'receipt',
    'sell',
    'inventory_2',

    // Status
    'info',
    'help',
    'warning',
    'error',
    'check_circle',
    'block',
    'verified',
    'priority_high',
    'report',

    // Security
    // Security
    'lock',
    'lock_open',
    'key',
    'security',
    'visibility',
    'visibility_off',
    'fingerprint',
    'password',
    'login',

    // Devices
    'phone_android',
    'phone_iphone',
    'tablet',
    'laptop',
    'computer',
    'desktop_windows',
    'keyboard',
    'mouse',
    'watch',
    'smartphone',

    // Time
    'schedule',
    'access_time',
    'calendar_today',
    'event',
    'today',
    'date_range',
    'alarm',
    'timer',

    // Location
    'location_on',
    'location_off',
    'place',
    'map',
    'navigation',
    'public',
    'language',
    'explore',

    // Content
    'star',
    'star_border',
    'favorite',
    'favorite_border',
    'bookmark',
    'bookmark_border',
    'flag',
    'label',
    'link',
    'open_in_new',
    'share',
    'copy_all',

    // UI
    'check_box',
    'check_box_outline_blank',
    'radio_button_checked',
    'radio_button_unchecked',
    'toggle_on',
    'toggle_off',
    'drag_handle',
    'view_list',
    'grid_view',
    'dashboard',
    'fullscreen',
    'fullscreen_exit',

    // Business
    'work',
    'business',
    'account_balance',
    'analytics',
    'bar_chart',
    'pie_chart',
    'trending_up',
    'trending_down',
    'attach_money',
    'euro',
]

const meta = {
    title: 'Core/Icon',
    component: Icon,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        name: {
            control: 'select',
            options: icons,
        },

        size: {
            control: {
                type: 'number',
                min: 8,
                max: 96,
                step: 1,
            },
        },

        color: {
            control: 'color',
        },
    },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'arrow_forward',
        size: 24,
    },
}

export const Gallery: { render: () => React.JSX.Element } = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
                gap: '16px',
                width: '100%',
                maxWidth: '1000px',
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
                        minHeight: '90px',
                    }}
                >
                    <Icon
                        name={name}
                        size={28}
                    />

                    <span
                        style={{
                            fontSize: '11px',
                            textAlign: 'center',
                            wordBreak: 'break-word',
                        }}
                    >
            {name}
          </span>
                </div>
            ))}
        </div>
    ),
}