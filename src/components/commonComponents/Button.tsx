import React, { ReactNode } from 'react'

type Props = {
    title: string
    icon?: ReactNode
    action: () => void
}

export default function Button({ title, icon, action }: Props) {
    return (
        <button className='buttonGradient text-customWhite hover:text-white hover:rounded-2xl rounded-lg px-4 py-2 hover:shadow-md duration-300' onClick={action}>
            {icon && icon}
            {title}
        </button>
    )
}