import React from 'react'
import Svg, { Path } from 'react-native-svg'

export interface GoogleIconProps {
    size?: number
}

export function GoogleIcon({ size = 20 }: GoogleIconProps) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                fill="#4285F4"
                d="M21.805 12.23c0-.79-.07-1.55-.205-2.28H12v4.32h5.49a4.7 4.7 0 0 1-2.04 3.09v2.57h3.3c1.93-1.78 3.055-4.4 3.055-7.7Z"
            />
            <Path
                fill="#34A853"
                d="M12 22c2.76 0 5.08-.91 6.77-2.47l-3.3-2.57c-.91.61-2.07.97-3.47.97-2.67 0-4.93-1.8-5.74-4.22H2.85v2.65A10.22 10.22 0 0 0 12 22Z"
            />
            <Path
                fill="#FBBC05"
                d="M6.26 13.71A6.15 6.15 0 0 1 5.94 12c0-.59.11-1.17.32-1.71V7.64H2.85A10.01 10.01 0 0 0 1.78 12c0 1.57.38 3.05 1.07 4.36l3.41-2.65Z"
            />
            <Path
                fill="#EA4335"
                d="M12 6.07c1.5 0 2.84.52 3.9 1.54l2.92-2.92C17.08 3.08 14.76 2 12 2a10.22 10.22 0 0 0-9.15 5.64l3.41 2.65C7.07 7.87 9.33 6.07 12 6.07Z"
            />
        </Svg>
    )
}