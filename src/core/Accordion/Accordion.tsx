import React from 'react'
import type { AccordionProps } from './types'
import { Container } from '../Container'
import { Button, type ButtonProps } from '../Button'
import { bottonVarians, iconPosition } from '../layout'

const dafoultBtnContainerConfig = {
  orientation: 'row',
  backgroundColor: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2'
}
const dafoultContentConfig = {
  backgroundColor: '$buttonSecondaryBackground',
  borderColor: '$buttonPrimaryBackground',
  borderWidth: 1,
  borderTopWidth: 0,
  padding: '$3'
}
const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  width = '100%',
  disabled = false,
  buttonProps,
  contentProps
}) => {
  const [open, setOpen] = React.useState(defaultOpen)

  const toggle = () => {
    if (disabled) {
      return
    }

    setOpen((previous) => !previous)
  }

  const buttonConfig = {
    label: title,
    disabled,
    variant: bottonVarians.Secondary,
    onPress: toggle,
    'aria-expanded': open,
    iconProps: {
      name: open ? 'expand_less' : 'expand_more',
      size: 20
    },
    iconPositionProp: iconPosition.Right,
    containerConfig: dafoultBtnContainerConfig,
    borderRadius: '$3',
    borderBottomRightRadius: open ? '$0' : '$3',
    borderBottomLeftRadius: open ? '$0' : '$3',
    ...buttonProps
  } as ButtonProps

  const contentConfig = {
    ...dafoultContentConfig,
    ...contentProps
  }

  return (
    <Container width={width} gap="$1">
      <Button {...buttonConfig} />
      {open && <Container {...contentConfig}>{children}</Container>}
    </Container>
  )
}

export default Accordion
