import { Button } from 'tamagui'

import type { NavLinkProps } from './types'

const NavLink = ({
                     label,
                     onPress,
                     disabled = false,
                 }: NavLinkProps) => {
    return (
        <Button
            unstyled
            disabled={disabled}
            onPress={onPress}
            paddingHorizontal="$3"
            paddingVertical="$2"
            color="$color"
            backgroundColor="transparent"
            hoverStyle={{
                color: '$primaryColor',
            }}
            pressStyle={{
                opacity: 0.7,
            }}
            focusStyle={{
                outlineWidth: 2,
                outlineColor: '$primaryColor',
            }}
        >
            {label}
        </Button>
    )
}

export default NavLink