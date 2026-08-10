import React from 'react'

type IconProps = {
    name: string
    size?: number
    color?: string
}

const Icon: React.FC<IconProps> = ({
                                       name,
                                       size = 24,
                                       color = 'black',
                                   }) => {
    return (
        <span
            className="material-symbols-outlined"
            style={{
                fontSize: size,
                color,
            }}
        >
      {name}
    </span>
    )
}

export default Icon