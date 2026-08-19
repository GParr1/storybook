import type { NavLinkProps } from './types'
import { Button } from '../Button'

const NavLink = ({ label, onPress, disabled = false }: NavLinkProps) => {
  return (
    <Button
      label={label}
      variant={'none'}
      unstyled
      disabled={disabled}
      onPress={onPress}
      //paddingHorizontal="$3"
      //paddingVertical="$2"
      color="$color"
      backgroundColor="transparent"
      // hoverStyle={{
      //     color: '$primaryColor',
      // }}
      pressStyle={{
        opacity: 0.7
      }}
      focusStyle={{
        outlineWidth: 2,
        outlineColor: '$primaryColor'
      }}
    />
  )
}

export default NavLink
