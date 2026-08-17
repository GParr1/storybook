export const FLEX_DIRECTIONS = [
    'row',
    'column',
    'row-reverse',
    'column-reverse',
] as const

export type FlexDirection =
    (typeof FLEX_DIRECTIONS)[number]

export const FLEX_ALIGNMENTS = [
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
] as const

export type FlexAlignment =
    (typeof FLEX_ALIGNMENTS)[number]

export const FLEX_JUSTIFICATIONS = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
] as const

export type FlexJustification =
    (typeof FLEX_JUSTIFICATIONS)[number]

export const FLEX_WRAPS = [
    'nowrap',
    'wrap',
    'wrap-reverse',
] as const

export type FlexWrap =
    (typeof FLEX_WRAPS)[number]