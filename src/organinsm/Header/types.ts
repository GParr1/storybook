import type {NavLinkProps} from "../../core/NavLink";

export interface HeaderProps {
    title?: string
    showLogin?: boolean
    navItems?: NavLinkProps[]
}