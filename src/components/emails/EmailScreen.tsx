import React from 'react'
import { emailScreenType } from '../../interfaces/userInterfaces'
import Email from './Email'
import EmailList from './EmailList'

type Props = {
    type: emailScreenType
}

export default function EmailScreen({ type }: Props) {
    return (
        <div className='flex'>
            <div className=' basis-2/6'>
                <EmailList type={type} />
            </div>
            <div className=' basis-4/6'>
                <Email />
            </div>
        </div>
    )
}