import type {TextProps} from "react-native";

export type NativeTextProps = TextProps & {
    as?: 'h1' | 'h5' | 'span' | 'p'
}