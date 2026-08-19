import type { YStackProps } from 'tamagui'

import type {
  FlexAlignment,
  FlexDirection,
  FlexJustification,
  FlexWrap
} from './layout.types'

export interface LayoutProps extends YStackProps {
  flexDirection?: FlexDirection
  alignItems?: FlexAlignment
  justifyContent?: FlexJustification
  flexWrap?: FlexWrap
}
