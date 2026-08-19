import type { ICONS } from './icons'

export type IconName = keyof typeof ICONS

export interface IconProps {
  name: IconName
  size?: number
  color?: string
  strokeWidth?: number
  accessibilityLabel?: string
}
