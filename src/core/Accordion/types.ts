import type { ReactNode } from 'react'

export type AccordionProps = {
    title: string
    children: ReactNode
    defaultOpen?: boolean
    disabled?: boolean
}