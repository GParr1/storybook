import type { NavLinkProps } from '../../core/NavLink'
import type {IconName} from "../../core/Icon";
import type {CoreImageProps} from "../../core/Image";

export interface ActionItem {
  name: IconName
  size?: number
  onPress?: () => void
}
export interface HeaderProps {
  title?: string
  onlyLogo?: boolean
  logoProps?: CoreImageProps
  navItems?: NavLinkProps[]
  actionItems?: ActionItem[]
}
