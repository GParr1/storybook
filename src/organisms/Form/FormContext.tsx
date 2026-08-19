import React from 'react'

import type { FormErrors, FormValues } from './types.ts'

interface FormContextValue {
  values: FormValues

  errors: FormErrors

  setValue: (name: string, value: string) => void
}

export const FormContext = React.createContext<FormContextValue | undefined>(
  undefined
)

export const useFormContext = () => {
  return React.useContext(FormContext)
}
