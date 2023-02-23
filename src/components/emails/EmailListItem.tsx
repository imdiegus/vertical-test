import React from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { emailResponse } from '../../interfaces/userInterfaces'
import { setSelectedEmail } from '../../slices/userSlice'
import { DateTime } from 'luxon'

type Props = {
    email: emailResponse
}

export default function EmailListItem({ email }: Props) {
    const dispatch = useAppDispatch()
    return (
        <div onClick={() => dispatch(setSelectedEmail(email))} className=' overflow-hidden h-26 bg-slate-200 py-1 px-2 rounded-md '>
            <div className='relative'>
                <p className='absolute top-0 right-0 text-xs text-customBlue'>{DateTime.fromISO(email.time).toLocaleString(DateTime.DATETIME_MED)}</p>
                <p className=' pt-2'>From: <span className=' mt-6 font-bold text-gray-700'>{email.fromData[0].firstName} {email.fromData[0].lastName} </span></p>
                <p><span className=' font-bold text-gray-700'>{email.subject}</span></p>
                <div className=' max-w-xs overflow-hidden'>
                    {email.message}
                </div>
            </div>
        </div>
    )
}