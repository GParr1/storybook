import React from "react";
import type { ContainerProps } from '../../core/Container'

export interface FormProps extends ContainerProps {
    children?: React.ReactNode
}
export const FORM_DEFAULTS = {
    width: '100%',
    maxWidth: 500,
    gap: '$4',
    padding: '$5',
    borderWidth: 1,
    borderColor: '$secondaryColor',
    borderRadius: '$4',
    backgroundColor: '$background',
} satisfies Partial<FormProps>