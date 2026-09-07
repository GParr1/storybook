import type { ReactNode } from 'react'

export interface ModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title?: string
    description?: string
    children: ReactNode
    showClose?: boolean
    width?: number | string
}

export interface ModalHeaderProps {
    children: ReactNode
}

export interface ModalBodyProps {
    children: ReactNode
}

export interface ModalFooterProps {
    children: ReactNode
}