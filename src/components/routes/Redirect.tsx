import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import LoadingScreen from '../commonComponents/LoadingScreen';

type Props = {}

export default function Redirect({ }: Props) {
    console.log('hola')
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('diego-email-token')) {
            navigate('/email')
        } else {
            navigate('/login')
        }
    }, [])
    return <div>
        <LoadingScreen />
    </div>
}