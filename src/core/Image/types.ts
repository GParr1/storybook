import type { ImageProps } from 'tamagui'

export type CoreImageProps = ImageProps

export const IMAGE_DEFAULTS = {
    objectFit: 'contain',
} satisfies Partial<CoreImageProps>