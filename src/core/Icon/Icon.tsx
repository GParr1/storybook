import { ICONS } from './icons'
import type { IconProps } from './types'

const Icon = ({
  name,
  size = 24,
  color = '$color',
  strokeWidth,
  accessibilityLabel
}: IconProps) => {
  const IconComponent = ICONS[name]

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      accessibilityLabel={accessibilityLabel}
    />
  )
}

export default Icon
