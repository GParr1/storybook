import { Text } from 'tamagui'
import type {IconProps} from "./types.ts";


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