import type { YStackProps } from 'tamagui'

import type {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  FlexWrap,
  Position,
  Overflow,
  TextAlign,
  Display
} from './layout.types'

export interface LayoutProps extends Omit<
  YStackProps,
  | 'flexDirection'
  | 'alignItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'position'
  | 'overflow'
  | 'textAlign'
  | 'display'
> {
  flexDirection?: FlexDirection
  alignItems?: FlexAlign
  justifyContent?: FlexJustify
  flexWrap?: FlexWrap

  position?: Position
  overflow?: Overflow
  textAlign?: TextAlign
  display?: Display
}
