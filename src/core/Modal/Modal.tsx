import React from 'react'
import { Dialog } from 'tamagui'
import { X } from '@tamagui/lucide-icons-2'

import type {
    ModalProps,
    ModalHeaderProps,
    ModalBodyProps,
    ModalFooterProps,
} from './types'

import { Container } from '../Container'
import { Text } from '../Text'
import { Button } from '../Button'

const ModalHeader = ({ children }: ModalHeaderProps) => {
    return (
        <Container
            orientation="row"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            paddingBottom="$3"
        >
            {children}
        </Container>
    )
}

const ModalBody = ({ children }: ModalBodyProps) => {
    return (
        <Container
            orientation="column"
            width="100%"
            gap="$3"
        >
            {children}
        </Container>
    )
}

const ModalFooter = ({ children }: ModalFooterProps) => {
    return (
        <Container
            orientation="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            gap="$3"
            paddingTop="$4"
        >
            {children}
        </Container>
    )
}

const Modal = ({
                   open,
                   onOpenChange,
                   title,
                   description,
                   children,
                   showClose = true,
                   width = 500,
               }: ModalProps) => {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    opacity={0.5}
                />

                <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    width={width}
                    maxWidth="90%"
                    borderRadius="$4"
                    padding="$5"
                >
                    <Container
                        orientation="column"
                        width="100%"
                        gap="$3"
                    >
                        {(title || description || showClose) && (
                            <ModalHeader>
                                <Container
                                    orientation="column"
                                    flex={1}
                                    gap="$1"
                                >
                                    {title && (
                                        <Dialog.Title>
                                            <Text
                                                fontSize="$6"
                                                fontWeight="700"
                                            >
                                                {title}
                                            </Text>
                                        </Dialog.Title>
                                    )}

                                    {description && (
                                        <Dialog.Description>
                                            <Text
                                                color="$colorSecondary"
                                                fontSize="$3"
                                            >
                                                {description}
                                            </Text>
                                        </Dialog.Description>
                                    )}
                                </Container>

                                {showClose && (
                                    <Dialog.Close asChild>
                                        <Button
                                            size="$3"
                                            circular
                                            chromeless
                                            aria-label="Close"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </Dialog.Close>
                                )}
                            </ModalHeader>
                        )}

                        {children}
                    </Container>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal