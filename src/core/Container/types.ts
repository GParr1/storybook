import type { LayoutProps } from '../layout/layout.props.ts'

export type ContainerOrientation = 'row' | 'column'

export interface ContainerProps extends LayoutProps {
  orientation?: ContainerOrientation
  tag?: 'div' | 'header' | 'main' | 'footer' | 'section' | 'nav'
}

export const DEFAULT_CONTAINER_PROPS = {
  borderColor: '$secondaryColor',
  backgroundColor: '$background'
} satisfies Partial<ContainerProps>
