import type React from 'react'
import type { ContainerProps } from '../../core/Container'
import type {ButtonProps} from "../../core/Button";

export type FormValues = Record<string, string>

export type FormErrors = Record<string, string>

export type FormFieldType = 'text' | 'email' | 'date' | 'select'

export interface FormFieldConfig {
  type: FormFieldType
  required?: boolean
}

export type FormFields = Record<string, FormFieldConfig>

export interface FormProps extends ContainerProps {
  children?: React.ReactNode

  loading?: boolean

  error?: string

  fields?: FormFields
  buttonProps?: ButtonProps
  onSubmit?: (values: FormValues) => void
}

export const FORM_DEFAULTS = {
  width: '100%',
  maxWidth: 500,
  gap: '$4',
  padding: '$5',
  borderWidth: 1,
  borderColor: '$primaryColor',
  borderRadius: '$4',
  backgroundColor: '$background',
  render:"form"
} satisfies Partial<FormProps>
