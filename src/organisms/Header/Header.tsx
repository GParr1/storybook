import React from 'react'
import {useMedia} from 'tamagui'
import { Text } from '../../core/Text'
import { Button } from '../../core/Button'
import { Image } from '../../core/Image'
import {Container, type ContainerProps} from '../../core/Container'
import { NavLink } from '../../core/NavLink'

import type { HeaderProps } from './types.ts'
import { bottonVarians } from '../../core/layout'

const Header = ({
  title = 'My App',
                  logoProps,
                  onlyLogo,
  navItems = [],
  actionItems = []
}: HeaderProps) => {
  const media = useMedia()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const isMobile = media.sm
  const containerHeaderProps = {
    render:"header",
    orientation:"row",
    width:"100%",
    minHeight:64,
    paddingHorizontal:"$4",
    alignItems:"center",
    justifyContent: !onlyLogo ? "space-between" : 'center',
    borderWidth:0,
    borderBottomWidth:1
  } as ContainerProps

  const containerSubMenuMobileProps = {
    position:"absolute",
    top:64,
    left:0,
    right:0,
    width:"100%",
    padding:"$4",
    gap:"$3",
    backgroundColor:"$background",
    borderBottomWidth:1,
    borderColor:"$secondaryColor",
    zIndex:100
  } as ContainerProps

  const containerHeaderItemProps = {
    orientation:"row",
    alignItems:"center",
    gap:"$2",
    ...(isMobile && { justifyContent:"center"} )
  } as ContainerProps

  const checkDesktopNav = !onlyLogo && !isMobile && navItems
  const checkMobileMenu = !onlyLogo &&isMobile && menuOpen

  return (
    <Container {...containerHeaderProps}>
      {/* Logo */}
      <Container {...containerHeaderItemProps}>
        <Image {...logoProps} />
        {title && <Text variant="title">{title}</Text>}
      </Container>

      {/* Desktop navigation */}
      {checkDesktopNav && (
        <Container {...containerHeaderItemProps} render={'nav'}>
          {navItems.map((item) => (
            <NavLink
              key={item.key ?? item.label}
              label={item.label}
              onPress={item.onPress}
              disabled={item.disabled}
            />
          ))}
        </Container>
      )}

      {/* Actions */}
      {!onlyLogo && <Container {...containerHeaderItemProps}>
        {!isMobile && actionItems.map(ai => (
            <Button variant="primary" iconProps={{name: ai.name, size: ai.size ?? 18}} onPress={ai?.onPress}/>
        ))}
        {isMobile && (
            <Button
                variant={bottonVarians.None}
                iconProps={{name: menuOpen ? 'close' : 'menu', size: 18}}
                onPress={() => setMenuOpen((open) => !open)}
            />
        )}
      </Container>}

      {/* Mobile menu */}
      {checkMobileMenu && (
        <Container {...containerSubMenuMobileProps}>
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              label={item.label}
              onPress={() => {
                item.onPress?.()
                setMenuOpen(false)
              }}
              disabled={item.disabled}
            />
          ))}
          <Container{...containerHeaderItemProps}>
            {actionItems.map(ai => (
                <Button variant="primary" iconProps={{ name: ai.name, size: ai.size ?? 18 }} onPress={ai?.onPress} />
            ))}
          </Container>
        </Container>
      )}
    </Container>
  )
}

export default Header
