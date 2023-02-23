import React from 'react'
import Layout from '../commonComponents/Layout'
import EmailScreen from '../emails/EmailScreen'

type Props = {}

export default function Sent({ }: Props) {
    return (
        <Layout>
            <EmailScreen
                type='sent'
            />
        </Layout>
    )
}