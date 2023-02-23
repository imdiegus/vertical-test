import React, { useMemo } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { emailScreenType } from '../../interfaces/userInterfaces'
import EmailListItem from './EmailListItem'

type Props = {
    type: emailScreenType
}

export default function EmailList({ type }: Props) {
    const emails = useAppSelector(state => state.user.emails)
    const user = useAppSelector(state => state.user.user)

    const filteredEmails = useMemo(() => {
        if (!emails) {
            return []
        }
        switch (type) {
            case 'inbox':
                return emails.filter(item => item.to.includes(user.email))
            case 'sent':
                return emails.filter(item => item.from === user.email)

        }
    }, [user, emails])


    return (
        <div className=' h-screen overflow-y-scroll flex flex-col gap-y-4 px-1 py-2'>
            {filteredEmails.map((item, index) => (
                <EmailListItem email={item} key={index} />
            ))}
        </div>
    )
}