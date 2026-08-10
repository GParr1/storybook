import type { TextProps } from 'react-native'
import type {
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { ButtonType } from './enum'
import type {IconName} from '../core/Icon'

export interface UITouchableOpacityProps
    extends TouchableOpacityProps {
  type: ButtonType
  style?: StyleProp<ViewStyle>
}

export type ButtonProps = {
  touchableOpacityConfig: UITouchableOpacityProps
  label: string
  textConfig?: TextProps
  icon?: IconName
}
