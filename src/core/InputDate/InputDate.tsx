import React from 'react'

import { Input, Label, Paragraph } from 'tamagui'

import { Container } from '../Container'

import { useFormContext } from '../../organisms/Form/FormContext'

import type { InputDateProps } from './types'

const InputDate: React.FC<InputDateProps> = ({
  label,
  error,
  helperText,
  id,
  name,
  mode = 'date',
  onChangeText,
  ...props
}) => {
  const form = useFormContext()

  const [day, setDay] = React.useState('')

  const [month, setMonth] = React.useState('')

  const [year, setYear] = React.useState('')

  /*
   * Explicit error has priority over
   * the error coming from FormContext.
   */
  const fieldError = error ?? (name ? form?.errors[name] : undefined)

  const inputId =
    id ??
    (label ? `date-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)

  const errorMessageId = fieldError ? `${inputId}-error` : undefined

  const helperMessageId = helperText ? `${inputId}-helper` : undefined

  /*
   * DATE MODE
   *
   * Native date input.
   */
  const handleDateChange = (value: string) => {
    if (name) {
      form?.setValue(name, value)
    }

    onChangeText?.(value)
  }

  /*
   * BOXES MODE
   *
   * DD / MM / YYYY
   *
   * becomes:
   *
   * YYYY-MM-DD
   */
  const updateBoxesDate = (
    nextDay: string,
    nextMonth: string,
    nextYear: string
  ) => {
    if (
      nextDay.length === 2 &&
      nextMonth.length === 2 &&
      nextYear.length === 4
    ) {
      const value = `${nextYear}-${nextMonth}-${nextDay}`

      if (name) {
        form?.setValue(name, value)
      }

      onChangeText?.(value)
    }
  }

  const handleDayChange = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, '')

    setDay(sanitizedValue)

    updateBoxesDate(sanitizedValue, month, year)
  }

  const handleMonthChange = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, '')

    setMonth(sanitizedValue)

    updateBoxesDate(day, sanitizedValue, year)
  }

  const handleYearChange = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, '')

    setYear(sanitizedValue)

    updateBoxesDate(day, month, sanitizedValue)
  }

  return (
    <Container width="100%" gap="$2">
      {label && (
        <Label htmlFor={inputId} color="$primaryText" fontWeight="600">
          {label}
        </Label>
      )}

      {mode === 'date' ? (
        <Input
          {...props}
          id={inputId}
          type="date"
          width="100%"
          minHeight={44}
          paddingHorizontal="$3"
          borderWidth={1}
          borderColor={fieldError ? '$errorColor' : '$secondaryColor'}
          backgroundColor="$background"
          color="$color"
          borderRadius="$3"
          hoverStyle={{
            borderColor: '$primaryColor'
          }}
          focusStyle={{
            borderColor: fieldError ? '$errorColor' : '$primaryColor',
            borderWidth: 2
          }}
          aria-invalid={fieldError ? true : undefined}
          aria-describedby={errorMessageId ?? helperMessageId}
          onChangeText={handleDateChange}
        />
      ) : (
        <Container orientation="row" gap="$2" width="100%">
          <Input
            flex={1}
            minHeight={44}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            value={day}
            borderWidth={1}
            borderColor={fieldError ? '$errorColor' : '$secondaryColor'}
            backgroundColor="$background"
            color="$color"
            borderRadius="$3"
            focusStyle={{
              borderColor: fieldError ? '$errorColor' : '$primaryColor',
              borderWidth: 2
            }}
            hoverStyle={{
              borderColor: '$primaryColor'
            }}
            onChangeText={handleDayChange}
          />

          <Input
            flex={1}
            minHeight={44}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            value={month}
            borderWidth={1}
            borderColor={fieldError ? '$errorColor' : '$secondaryColor'}
            backgroundColor="$background"
            color="$color"
            borderRadius="$3"
            focusStyle={{
              borderColor: fieldError ? '$errorColor' : '$primaryColor',
              borderWidth: 2
            }}
            hoverStyle={{
              borderColor: '$primaryColor'
            }}
            onChangeText={handleMonthChange}
          />

          <Input
            flex={2}
            minHeight={44}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            value={year}
            borderWidth={1}
            borderColor={fieldError ? '$errorColor' : '$secondaryColor'}
            backgroundColor="$background"
            color="$color"
            borderRadius="$3"
            focusStyle={{
              borderColor: fieldError ? '$errorColor' : '$primaryColor',
              borderWidth: 2
            }}
            hoverStyle={{
              borderColor: '$primaryColor'
            }}
            onChangeText={handleYearChange}
          />
        </Container>
      )}

      {fieldError ? (
        <Paragraph id={errorMessageId} size="$2" color="$errorColor">
          {fieldError}
        </Paragraph>
      ) : helperText ? (
        <Paragraph id={helperMessageId} size="$2" color="$secondaryColor">
          {helperText}
        </Paragraph>
      ) : null}
    </Container>
  )
}

export default InputDate
