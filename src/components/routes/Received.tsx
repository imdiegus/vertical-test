import React, { useEffect } from 'react'
import axiosClient from '../../config/axiosClient'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setEmails } from '../../slices/userSlice'
import Layout from '../commonComponents/Layout'

type Props = {}

export default function Received({ }: Props) {
    const user = useAppSelector(state => state.user.user)

    const dispatch = useAppDispatch()
    console.log(user.email)

    useEffect(() => {
        const getEmails = async () => {
            try {
                const res = await axiosClient.get(`/email/${user.email}`)
                console.log(res)
                dispatch(setEmails(res.data.data))
            } catch (error) {
                console.log(error)
            }
        }
        getEmails()
    }, [])
    return (
        <Layout>
            <div>
                <div>
                </div>
                <div>
                </div></div>
        </Layout>
    )
}