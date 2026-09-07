import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal } from './Modal'
import { Button } from '../Button'
import { Text } from '../Text'
import { Container } from '../Container'

const meta = {
    title: 'Core/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false)

        return (
            <Container
                orientation="column"
                alignItems="center"
                gap="$4"
            >
                <Button onPress={() => setOpen(true)}>
                    Apri modale
                </Button>

                <Modal
                    open={open}
                    onOpenChange={setOpen}
                    title="Elimina partita"
                    description="Sei sicuro di voler eliminare questa partita?"
                >
                    <Modal.Body>
                        <Text>
                            Questa operazione non può essere annullata.
                        </Text>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            onPress={() => setOpen(false)}
                        >
                            Annulla
                        </Button>

                        <Button
                            onPress={() => {
                                console.log('Partita eliminata')
                                setOpen(false)
                            }}
                        >
                            Conferma
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    },
}
