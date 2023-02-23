import React, { ReactNode, useEffect, useMemo } from 'react'
import string from '../../constants/strings'
import Sidebar from './Sidebar'

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const isLoggedin = useMemo(() => {
        return localStorage.getItem(string.locaStorageToken)
    }, [])

    return (
        <div className={`${isLoggedin ? 'mainLayout ' : ''}`}><Sidebar />{children}</div>
    )
}