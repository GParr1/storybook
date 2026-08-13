export const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'tag',
  'none',
  'submit',
] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]