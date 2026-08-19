import React from 'react'
import { Paragraph, Separator } from 'tamagui'

import { Icon } from '../Icon'
import type { AccordionProps } from './types'
import { Container } from '../Container'
import { Button } from '../Button'

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
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

  return (
    <Container width="100%">
      <Button
        unstyled
        disabled={disabled}
        onPress={toggle}
        padding="$3"
        borderRadius="$4"
        width="100%"
        backgroundColor="$background"
        hoverStyle={{
          backgroundColor: '$backgroundHover'
        }}
        pressStyle={{
          backgroundColor: '$backgroundPress'
        }}
        focusStyle={{
          outlineWidth: 2,
          outlineColor: '$primaryColor',
          outlineStyle: 'solid'
        }}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        opacity={disabled ? 0.5 : 1}
        aria-expanded={open}
        aria-disabled={disabled}
      >
        <Container
          orientation={'row'}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          gap="$2"
        >
          <Paragraph
            flex={1}
            fontWeight="600"
            color="$primaryText"
            textAlign="left"
          >
            {title}
          </Paragraph>

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
