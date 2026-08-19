import React from 'react'
import { Image as TamaguiImage } from 'tamagui'

import { IMAGE_DEFAULTS, type CoreImageProps } from './types'

export const Image: React.FC<CoreImageProps> = ({ ...props }) => {
  return <TamaguiImage {...IMAGE_DEFAULTS} {...props} />
}
