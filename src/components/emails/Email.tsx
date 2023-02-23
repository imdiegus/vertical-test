import { DateTime } from 'luxon'
import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'

type Props = {}

export default function Email({ }: Props) {
    const email = useAppSelector(state => state.user.selectedEmail)
    return (
        <div>
            {email ? (
                <div className=' flex flex-col gap-y-2 pt-6 px-4'>
                    <div className=' border-b pb-4'>
                        <div>

                            <p className='text-sm text-slate-600'>Subject</p>
                            <p className='text-md font-bold text-customBlue'>{email.subject}</p>
                        </div>
                        <div>

                            <p className='text-sm text-slate-600'>From</p>
                            <p className='text-md font-bold text-customBlue'>{email.fromData[0].firstName} {email.fromData[0].lastName} ({email.fromData[0].email})</p>
                        </div>

                        <div>

                            <p className='text-sm text-slate-600'>To</p>
                            <div className='text-md font-bold text-customBlue'>{email.toData.map((item, index) => (
                                <p>{item.firstName} {item.firstName} ({item.email})</p>
                            ))}</div>
                        </div>

                        <p className='absolute top-0 right-0 text-xs text-customBlue p-6'>{DateTime.fromISO(email.time).toLocaleString(DateTime.DATETIME_MED)}</p>

                    </div>
                    <div>
                        <p>{email.message}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Please select an email to view</p>
                </div>
            )}
        </div>
    )
}