import React from 'react'
import { Spinner } from 'tamagui'
import { Container } from '../../core/Container'
import { Button } from '../../core/Button'
import { FormContext } from './FormContext.tsx'
import { FORM_DEFAULTS, type FormErrors, type FormProps } from './types.ts'
import { validateForm } from './utils.ts'
import {Text} from "../../core/Text";

const Form: React.FC<FormProps> = ({
  children,
  loading = false,
  error,
  fields = {},
  onSubmit,
  buttonProps,
  ...props
}) => {
  const [values, setValues] = React.useState<Record<string, string>>({})

  const [errors, setErrors] = React.useState<FormErrors>({})

  const setValue = React.useCallback((name: string, value: string) => {
    setValues((current) => ({
      ...current,
      [name]: value
    }))

    setErrors((current) => {
      if (!current[name]) {
        return current
      }

      const next = {
        ...current
      }

      delete next[name]

      return next
    })
  }, [])

  const handleSubmit = React.useCallback(() => {
    const validationErrors = validateForm(values, fields)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }
    onSubmit?.(values)
  }, [values, fields, onSubmit])

  const contextValue = React.useMemo(
    () => ({
      values,
      errors,
      setValue
    }),
    [values, errors, setValue]
  )

  return (
    <FormContext.Provider value={contextValue}>
      <Container {...FORM_DEFAULTS} {...props} opacity={loading ? 0.7 : 1}>
        {children}
        {error && (
            <Text variant={'small'} color="$errorColor" render="alert">
              {error}
            </Text>
        )}
        {!loading && <Button {...buttonProps} onPress={handleSubmit}/>}

        {loading && (
          <Container alignItems="center" justifyContent="center" padding="$3">
            <Spinner size="small" />
          </Container>
        )}
      </Container>
    </FormContext.Provider>
  )
}

export default Form
