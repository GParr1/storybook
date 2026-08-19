import React from 'react'
import { Separator } from 'tamagui'

import { Icon } from '../Icon'
import type { AccordionProps } from './types'
import { Container, type ContainerProps } from '../Container'
import { Button } from '../Button'
import { Text } from '../Text'

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  width,
  defaultOpen = false,
  disabled = false
}) => {
  const [open, setOpen] = React.useState(defaultOpen)

  const toggle = () => {
    if (disabled) {
      return
    }

    setOpen((prev) => !prev)
  }

  const containerConfig = {
    orientation: 'row',
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$2'
  } as ContainerProps
  return (
    <Container width={width}>
      <Button
        unstyled
        width={width}
        label={title}
        variant={'secondary'}
        disabled={disabled}
        onPress={toggle}
        aria-expanded={open}
      >
        <Container {...containerConfig}>
          <Text
            flex={1}
            children={title}
            borderColor={'none'}
            fontWeight="600"
            color="$primaryText"
            textAlign="left"
          />

          <Icon
            name={open ? 'expand_less' : 'expand_more'}
            size={20}
            color="$primaryText"
          />
        </Container>
      </Button>

      <Separator borderColor="$secondaryBg" />

      {open && (
        <Container padding="$3" backgroundColor="$primaryBg">
          {children}
        </Container>
      )}
    </Container>
  )
}

export default Accordion
