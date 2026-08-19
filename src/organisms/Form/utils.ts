import type { FormErrors, FormFields, FormValues } from './types.ts'
export const isRequired = (value?: string): boolean => {
  return Boolean(value && value.trim().length > 0)
}

export const isEmail = (value?: string): boolean => {
  if (!value) {
    return false
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export const isDate = (value?: string): boolean => {
  if (!value) {
    return false
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false
  }

  const [year, month, day] = value.split('-').map(Number)

  const date = new Date(year, month - 1, day)

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

export const validateForm = (
  values: FormValues,
  fields: FormFields
): FormErrors => {
  const errors: FormErrors = {}

  Object.entries(fields).forEach(([name, config]) => {
    const value = values[name]

    if (config.required && !isRequired(value)) {
      errors[name] = 'This field is required.'
      console.log('This field is required.')

      return
    }

    if (!value) {
      return
    }

    switch (config.type) {
      case 'email':
        if (!isEmail(value)) {
          errors[name] = 'Please enter a valid email address.'
        }
        break

      case 'date':
        if (!isDate(value)) {
          errors[name] = 'Please enter a valid date.'
        }
        break
    }
  })

  return errors
}

export const minLength = (
  value: string | undefined,
  length: number
): boolean => {
  return Boolean(value && value.length >= length)
}

export const maxLength = (
  value: string | undefined,
  length: number
): boolean => {
  return Boolean(value && value.length <= length)
}
