import {
  bottonVarians,
  FLEX_DIRECTION,
  FLEX_ALIGN,
  FLEX_JUSTIFY,
  FLEX_WRAP,
  POSITION,
  OVERFLOW,
  TEXT_ALIGN,
  DISPLAY,
  iconPosition
} from './layout.variants'

export type ButtonVariant = (typeof bottonVarians)[keyof typeof bottonVarians]

export type IconPosition = (typeof iconPosition)[keyof typeof iconPosition]

export type FlexDirection = (typeof FLEX_DIRECTION)[keyof typeof FLEX_DIRECTION]

export type FlexAlign = (typeof FLEX_ALIGN)[keyof typeof FLEX_ALIGN]

export type FlexJustify = (typeof FLEX_JUSTIFY)[keyof typeof FLEX_JUSTIFY]

export type FlexWrap = (typeof FLEX_WRAP)[keyof typeof FLEX_WRAP]

export type Position = (typeof POSITION)[keyof typeof POSITION]

export type Overflow = (typeof OVERFLOW)[keyof typeof OVERFLOW]

export type TextAlign = (typeof TEXT_ALIGN)[keyof typeof TEXT_ALIGN]

export type Display = (typeof DISPLAY)[keyof typeof DISPLAY]
