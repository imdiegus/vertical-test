import React, { useEffect } from 'react'
import axiosClient from '../../config/axiosClient'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setEmails } from '../../slices/userSlice'
import Layout from '../commonComponents/Layout'
import EmailList from '../emails/EmailList'
import EmailScreen from '../emails/EmailScreen'

type Props = {}

export default function Received({ }: Props) {
    const user = useAppSelector(state => state.user.user)

    const dispatch = useAppDispatch()

    useEffect(() => {

        const getEmails = async () => {
            try {
                const res = await axiosClient().get(`/email/${user.email}`)
                dispatch(setEmails(res.data.data))
            } catch (error) {
                console.log(error)
            }
        }
        if (user.email) {
            getEmails()
        }
    }, [user])
    return (
        <Layout>
            <EmailScreen
                type='inbox'
            />

        </Layout>
    )
}