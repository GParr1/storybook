import type { ReactNode } from 'react'
import type { ButtonProps } from '../Button'
import type { ContainerProps } from '../Container'

export interface AccordionProps {
  title: string
  children: ReactNode

  defaultOpen?: boolean
  disabled?: boolean
  width?: string
  buttonProps?: Partial<ButtonProps>
  contentProps?: Partial<ContainerProps>
}
