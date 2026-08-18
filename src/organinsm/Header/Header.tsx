import React from 'react'
import {
    useMedia,
} from 'tamagui'

import { Text } from '../../core/Text'
import Button from '../../core/Button'
import {Image} from '../../core/Image'
import { Container } from '../../core/Container'
import NavLink from '../../core/NavLink'
import { Assets } from '../../assets/assets'

import type { HeaderProps } from './types'

const Header = ({
                    title = 'My App',
                    showLogin = true,
                    navItems = [],
                }: HeaderProps) => {
    const media = useMedia()
    const [menuOpen, setMenuOpen] = React.useState(false)

    const isMobile = media.sm

    return (
        <Container
            orientation="row"
            width="100%"
            minHeight={64}
            paddingHorizontal="$4"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={0}
            borderBottomWidth={1}
        >
            {/* Logo */}
            <Container
                orientation="row"
                alignItems="center"
                gap="$2"
            >
                <Image
                    src={Assets.logo}
                    width={60}
                    height={60}
                    objectFit="contain"
                    aria-label="MiniLiga"
                />

                {title && <Text variant="title">
                    {title}
                </Text>}
            </Container>

            {/* Desktop navigation */}
            {!isMobile && navItems && (
                <Container
                    orientation="row"
                    alignItems="center"
                    gap="$2"
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            label={item.label}
                            onPress={item.onPress}
                            disabled={item.disabled}
                        />
                    ))}
                </Container>
            )}

            {/* Actions */}
            <Container
                orientation="row"
                alignItems="center"
                gap="$2"
            >
                {!isMobile && showLogin && (
                    <Button
                        variant="primary"
                        icon="login"
                    />
                )}

                {!isMobile && (
                    <Button
                        variant="primary"
                        icon="settings"
                    />
                )}

                {isMobile && (
                    <Button
                        variant="none"
                        icon={menuOpen ? 'close' : 'menu'}
                        onPress={() => setMenuOpen((open) => !open)}
                    />
                )}
            </Container>

            {/* Mobile menu */}
            {isMobile && menuOpen && (
                <Container
                    position="absolute"
                    top={64}
                    left={0}
                    right={0}
                    width="100%"
                    padding="$4"
                    gap="$3"
                    backgroundColor="$background"
                    borderBottomWidth={1}
                    borderColor="$secondaryColor"
                    zIndex={100}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            label={item.label}
                            onPress={() => {
                                item.onPress?.()
                                setMenuOpen(false)
                            }}
                            disabled={item.disabled}
                        />
                    ))}
                    <Container
                        orientation="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="$2"
                    >
                    {showLogin && (
                        <Button
                            variant="primary"
                            icon="login"
                            onPress={() => {
                                setMenuOpen(false)
                            }}
                        />
                    )}

                    <Button
                        variant="primary"
                        icon="settings"
                        onPress={() => {
                            setMenuOpen(false)
                        }}
                    />
                    </Container>
                </Container>
            )}
        </Container>
    )
}

export default Header