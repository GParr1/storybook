import { Text } from 'tamagui'
import type { IconName } from './types'

export type IconProps = {
    name: IconName
    size?: number
    color?: string
}

const Icon = ({
                  name,
                  size = 24,
                  color = '$color',
              }: IconProps) => {
    return (
        <Text
            aria-hidden
            userSelect="none"
            color={color}
            fontSize={size}
            lineHeight={size}
            style={{
                fontFamily: 'Material Symbols Outlined',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontFeatureSettings: "'liga'",
                textTransform: 'none',
            }}
        >
            {name}
        </Text>
    )
}

export default Icon