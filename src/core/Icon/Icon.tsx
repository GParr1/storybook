import { Text } from 'tamagui'

type IconProps = {
    name: string
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
            style={{
                fontFamily: 'Material Symbols Outlined',
                fontSize: size,
                color,
                lineHeight: size,
            }}
        >
            {name}
        </Text>
    )
}

export default Icon